import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLICACOES_DIR = path.resolve(__dirname, '../../src/content/publicacoes/pt');
const FEATURED_FILE = path.resolve(__dirname, '../../src/modules/publicacoes/featured.ts');

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

function writeFeaturedFile(slugOrNull) {
  const slugs = slugOrNull ? [slugOrNull] : [];
  const content = `export const featuredSlugs: string[] = ${JSON.stringify(slugs)};\n`;
  return writeFile(FEATURED_FILE, content, 'utf8');
}

function parseArgs(argv) {
  const args = new Set(argv);
  const slugIndex = argv.indexOf('--slug');
  const slug = slugIndex >= 0 ? argv[slugIndex + 1] : null;
  return {
    clear: args.has('--clear'),
    slug: slug && !slug.startsWith('--') ? slug : null
  };
}

async function loadPublishedPtBr() {
  const files = (await readdir(PUBLICACOES_DIR)).filter((f) => f.endsWith('.md'));
  const items = [];

  for (const file of files) {
    const fullPath = path.join(PUBLICACOES_DIR, file);
    const md = await readFile(fullPath, 'utf8');
    const fm = parseFrontmatter(md);
    if (!fm) continue;

    const status = String(fm.status ?? '');
    const language = String(fm.language ?? '');
    const slug = String(fm.slug ?? '').trim();
    const title = String(fm.title ?? '').trim();

    if (status !== 'published') continue;
    if (language !== 'pt-BR') continue;
    if (!slug) continue;

    items.push({ slug, title, file });
  }

  items.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  return items;
}

async function main() {
  const { clear, slug: slugArg } = parseArgs(process.argv.slice(2));

  if (clear) {
    await writeFeaturedFile(null);
    process.stdout.write('PASS: Featured limpo (featuredSlugs = []).\n');
    return;
  }

  const published = await loadPublishedPtBr();
  if (published.length === 0) {
    process.stderr.write('FAIL: nenhuma Publication pt-BR com status=published encontrada.\n');
    process.exitCode = 1;
    return;
  }

  const bySlug = new Map(published.map((p) => [p.slug, p]));

  let chosenSlug = slugArg;

  if (chosenSlug) {
    if (!bySlug.has(chosenSlug)) {
      process.stderr.write(`FAIL: slug inválido para Featured (precisa existir, pt-BR, published): '${chosenSlug}'.\n`);
      process.exitCode = 1;
      return;
    }
  } else if (published.length === 1) {
    chosenSlug = published[0].slug;
  } else {
    process.stdout.write('Publications pt-BR status=published:\n');
    published.forEach((p, i) => {
      process.stdout.write(`${String(i + 1).padStart(2, ' ')}. ${p.slug} — ${p.title}\n`);
    });

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
      const answer = (await rl.question('\nSelecione o número para Featured: ')).trim();
      const n = Number.parseInt(answer, 10);
      if (!Number.isFinite(n) || n < 1 || n > published.length) {
        process.stderr.write(`FAIL: seleção inválida: '${answer}'.\n`);
        process.exitCode = 1;
        return;
      }
      chosenSlug = published[n - 1].slug;
    } finally {
      rl.close();
    }
  }

  await writeFeaturedFile(chosenSlug);
  process.stdout.write(`PASS: Featured definido: '${chosenSlug}'.\n`);
}

main().catch((err) => {
  process.stderr.write(`${err?.message || String(err)}\n`);
  process.exitCode = 1;
});

