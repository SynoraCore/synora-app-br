import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLICACOES_DIR = path.resolve(__dirname, '../../src/content/publicacoes/pt');

function normalizeSlug(input) {
  return String(input ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-');
}

function toIsoDateOnly(date = new Date()) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function frontmatterBlock(frontmatter) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(frontmatter)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) lines.push(`  - ${JSON.stringify(item)}`);
      continue;
    }
    lines.push(`${key}: ${JSON.stringify(value)}`);
  }
  lines.push('---');
  return lines.join('\n');
}

async function ensureDirExists(dir) {
  try {
    const s = await stat(dir);
    if (!s.isDirectory()) throw new Error(`${dir} exists but is not a directory`);
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error(`Missing directory: ${dir}`);
    }
    throw err;
  }
}

async function listExistingSlugs() {
  const files = await readdir(PUBLICACOES_DIR);
  return new Set(
    files
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/i, ''))
  );
}

async function main() {
  await ensureDirExists(PUBLICACOES_DIR);

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    const title = (await rl.question('Título: ')).trim();
    const dek = (await rl.question('Dek: ')).trim();
    const slugRaw = await rl.question('Slug (vazio = auto a partir do título): ');
    const slug = normalizeSlug(slugRaw || title);

    if (!title) throw new Error('Título é obrigatório.');
    if (!dek) throw new Error('Dek é obrigatório.');
    if (!slug) throw new Error('Slug inválido.');

    const type = (await rl.question('Type [analysis|observation|note|research] (default: analysis): ')).trim() || 'analysis';
    const domain =
      (await rl.question(
        'Domain [core|guardian|tourism|mediadora|audio|protocolos|institutional] (default: core): '
      )).trim() || 'core';
    const language = (await rl.question('Language [pt-BR|es|en] (default: pt-BR): ')).trim() || 'pt-BR';
    const authorsRaw = (await rl.question('Autores (separados por vírgula) (default: Synora): ')).trim() || 'Synora';
    const status = (await rl.question('Status [draft|review|published|archived] (default: draft): ')).trim() || 'draft';

    const authors = authorsRaw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (authors.length === 0) throw new Error('Ao menos 1 autor é obrigatório.');

    const publishedAtRaw = (await rl.question(`published_at (YYYY-MM-DD) (default: ${toIsoDateOnly()}): `)).trim();
    const published_at = `${publishedAtRaw || toIsoDateOnly()}T00:00:00Z`;

    const existing = await listExistingSlugs();
    if (existing.has(slug)) {
      throw new Error(`Slug já existe: ${slug}`);
    }

    const filePath = path.join(PUBLICACOES_DIR, `${slug}.md`);
    const frontmatter = {
      title,
      dek,
      slug,
      type,
      domain,
      language,
      authors,
      status,
      published_at
    };

    const body = [
      frontmatterBlock(frontmatter),
      '',
      '<!--',
      'Escreva a Publication aqui em Markdown.',
      'Guardrails: typography-led por padrão; evite linguagem promocional; preserve diferenças entre observação/evidência/prova quando relevante.',
      '-->',
      '',
      ''
    ].join('\n');

    await writeFile(filePath, body, { encoding: 'utf8', flag: 'wx' });

    process.stdout.write(`\nOK: criado ${path.relative(process.cwd(), filePath)}\n`);
    process.stdout.write(`Próximos passos sugeridos:\n`);
    process.stdout.write(`- editar o Markdown\n`);
    process.stdout.write(`- rodar: npm run build\n`);
    process.stdout.write(`- (opcional) atualizar Featured em src/modules/publicacoes/featured.ts\n\n`);
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  process.stderr.write(`${err?.message || String(err)}\n`);
  process.exitCode = 1;
});

