import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLICACOES_DIR = path.resolve(__dirname, '../../src/content/publicacoes/pt');

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return null;
  const raw = match[1];
  const lines = raw.split('\n');
  const data = {};
  let currentArrayKey = null;

  const normalizeScalar = (value) => value.replace(/^"|"$/g, '');

  const tryParseInlineArray = (rawValue) => {
    const trimmed = rawValue.trim();
    if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) return null;
    try {
      const parsed = JSON.parse(trimmed);
      if (!Array.isArray(parsed)) return null;
      return parsed.map((v) => String(v));
    } catch {
      return null;
    }
  };

  for (const line of lines) {
    const arrayItem = line.match(/^\s{2}-\s(.+)\s*$/);
    if (arrayItem && currentArrayKey) {
      data[currentArrayKey] ??= [];
      data[currentArrayKey].push(normalizeScalar(arrayItem[1]));
      continue;
    }

    const kv = line.match(/^([a-zA-Z0-9_]+):\s*(.*)\s*$/);
    if (!kv) continue;
    const [, key, valueRaw] = kv;

    currentArrayKey = valueRaw === '' ? key : null;
    if (valueRaw === '') {
      data[key] = [];
      continue;
    }

    const inlineArray = tryParseInlineArray(valueRaw);
    data[key] = inlineArray ?? normalizeScalar(valueRaw);
  }

  return data;
}

function parseArgs(argv) {
  const slugIndex = argv.indexOf('--slug');
  const slug = slugIndex >= 0 ? argv[slugIndex + 1] : null;
  const relatedIndex = argv.indexOf('--related');
  const relatedRaw = relatedIndex >= 0 ? argv[relatedIndex + 1] : null;
  const clear = argv.includes('--clear');

  const normalizeList = (raw) =>
    String(raw ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

  return {
    slug: slug && !slug.startsWith('--') ? slug : null,
    related: relatedRaw && !relatedRaw.startsWith('--') ? normalizeList(relatedRaw) : null,
    clear
  };
}

function updateFrontmatterRelated(markdown, nextRelatedOrNull) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) throw new Error('Frontmatter ausente.');

  const fmRaw = match[1];
  const fmLines = fmRaw.split('\n');

  const out = [];
  for (let i = 0; i < fmLines.length; i++) {
    const line = fmLines[i];

    const isRelatedKey = /^related:\s*(.*)\s*$/.test(line);
    if (!isRelatedKey) {
      out.push(line);
      continue;
    }

    // Remove `related:` (inline) ou bloco (multiline)
    const [, valueRaw] = line.match(/^related:\s*(.*)\s*$/) ?? [];
    if (valueRaw === '') {
      // consume subsequent `  - ...` lines
      while (i + 1 < fmLines.length && /^\s{2}-\s/.test(fmLines[i + 1])) i++;
    }
    // do not push related lines
  }

  if (Array.isArray(nextRelatedOrNull) && nextRelatedOrNull.length > 0) {
    out.push('related:');
    for (const slug of nextRelatedOrNull) out.push(`  - ${JSON.stringify(slug)}`);
  }

  const rebuiltFrontmatter = `---\n${out.join('\n')}\n---\n`;
  return rebuiltFrontmatter + markdown.slice(match[0].length);
}

async function listAllPublicacoes() {
  const files = (await readdir(PUBLICACOES_DIR)).filter((f) => f.endsWith('.md'));
  const items = [];

  for (const file of files) {
    const fullPath = path.join(PUBLICACOES_DIR, file);
    const md = await readFile(fullPath, 'utf8');
    const fm = parseFrontmatter(md);
    if (!fm) continue;

    const slug = String(fm.slug ?? '').trim();
    const title = String(fm.title ?? '').trim();
    const status = String(fm.status ?? '').trim();
    const language = String(fm.language ?? '').trim();
    if (!slug) continue;

    items.push({ slug, title, status, language, file, fullPath });
  }

  items.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  return items;
}

function validateRelated({ originSlug, selected, allBySlug, eligibleBySlug }) {
  if (!allBySlug.has(originSlug)) return { ok: false, error: `origem inexistente: '${originSlug}'` };

  const uniq = new Set(selected);
  if (uniq.size !== selected.length) return { ok: false, error: 'duplicado em related' };
  if (selected.length > 3) return { ok: false, error: 'related > 3' };
  if (selected.includes(originSlug)) return { ok: false, error: 'self-reference não permitido' };

  for (const slug of selected) {
    if (!allBySlug.has(slug)) return { ok: false, error: `slug relacionado inexistente: '${slug}'` };
    if (!eligibleBySlug.has(slug)) return { ok: false, error: `slug não elegível (precisa ser pt-BR + published): '${slug}'` };
  }

  return { ok: true };
}

async function main() {
  const { slug: originArg, related: relatedArg, clear } = parseArgs(process.argv.slice(2));

  const all = await listAllPublicacoes();
  if (all.length === 0) {
    process.stderr.write('FAIL: nenhuma Publication encontrada.\n');
    process.exitCode = 1;
    return;
  }

  const allBySlug = new Map(all.map((p) => [p.slug, p]));
  const eligible = all.filter((p) => p.language === 'pt-BR' && p.status === 'published');
  const eligibleBySlug = new Map(eligible.map((p) => [p.slug, p]));

  let originSlug = originArg;
  if (!originSlug) {
    process.stdout.write('Publications (origem):\n');
    all.forEach((p, i) => {
      process.stdout.write(`${String(i + 1).padStart(2, ' ')}. ${p.slug} — ${p.title} [${p.status}/${p.language}]\n`);
    });

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
      const answer = (await rl.question('\nSelecione o número da origem: ')).trim();
      const n = Number.parseInt(answer, 10);
      if (!Number.isFinite(n) || n < 1 || n > all.length) {
        process.stderr.write(`FAIL: origem inválida: '${answer}'.\n`);
        process.exitCode = 1;
        return;
      }
      originSlug = all[n - 1].slug;
    } finally {
      rl.close();
    }
  }

  if (!allBySlug.has(originSlug)) {
    process.stderr.write(`FAIL: origem inexistente: '${originSlug}'.\n`);
    process.exitCode = 1;
    return;
  }

  const origin = allBySlug.get(originSlug);

  if (clear) {
    const md = await readFile(origin.fullPath, 'utf8');
    const next = updateFrontmatterRelated(md, null);
    await writeFile(origin.fullPath, next, 'utf8');
    process.stdout.write(`PASS: related removido de '${originSlug}'.\n`);
    return;
  }

  const eligibleForOrigin = eligible.filter((p) => p.slug !== originSlug);

  let selected = relatedArg;
  if (!selected) {
    if (eligibleForOrigin.length === 0) {
      process.stdout.write('FAIL: não há Publications elegíveis (pt-BR + published) para related (excluindo a origem).\n');
      process.exitCode = 1;
      return;
    }

    process.stdout.write(`Elegíveis para related (pt-BR + published), exceto '${originSlug}':\n`);
    eligibleForOrigin.forEach((p, i) => {
      process.stdout.write(`${String(i + 1).padStart(2, ' ')}. ${p.slug} — ${p.title}\n`);
    });

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
      const answer = (await rl.question('\nEscolha 0 a 3 números (separados por vírgula). Vazio = 0: ')).trim();
      if (!answer) selected = [];
      else {
        const nums = answer
          .split(',')
          .map((s) => Number.parseInt(s.trim(), 10))
          .filter((n) => Number.isFinite(n));

        if (nums.length === 0) {
          process.stderr.write(`FAIL: seleção inválida: '${answer}'.\n`);
          process.exitCode = 1;
          return;
        }

        selected = nums.map((n) => eligibleForOrigin[n - 1]?.slug).filter(Boolean);
        if (selected.length !== nums.length) {
          process.stderr.write(`FAIL: seleção fora do range: '${answer}'.\n`);
          process.exitCode = 1;
          return;
        }
      }
    } finally {
      rl.close();
    }
  }

  const validation = validateRelated({ originSlug, selected, allBySlug, eligibleBySlug });
  if (!validation.ok) {
    process.stderr.write(`FAIL: ${validation.error}.\n`);
    process.exitCode = 1;
    return;
  }

  const md = await readFile(origin.fullPath, 'utf8');
  const next = updateFrontmatterRelated(md, selected.length ? selected : null);
  await writeFile(origin.fullPath, next, 'utf8');
  process.stdout.write(`PASS: related atualizado em '${originSlug}' (${selected.length}).\n`);
}

main().catch((err) => {
  process.stderr.write(`${err?.message || String(err)}\n`);
  process.exitCode = 1;
});

