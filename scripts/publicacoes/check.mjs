import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLICACOES_DIR = path.resolve(__dirname, '../../src/content/publicacoes/pt');

const STATUSES = new Set(['draft', 'review', 'published', 'archived']);
const PLACEHOLDER_PATTERNS = [
  /\bTODO\b(?=[:\]\s-])/,
  /\bTBD\b(?=[:\]\s-])/,
  /escreva a publication aqui/i,
  /placeholder/i
];

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

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
}

function stripHtmlComments(text) {
  return text.replace(/<!--[\s\S]*?-->/g, '').trim();
}

function isNonEmptyBody(markdown) {
  const body = stripHtmlComments(stripFrontmatter(markdown));
  return body.length > 0;
}

function hasPlaceholders(markdown) {
  // Placeholders devem ser detectados no conteúdo legível; comentários HTML não contam por si só.
  const body = stripHtmlComments(stripFrontmatter(markdown));
  return PLACEHOLDER_PATTERNS.some((re) => re.test(body));
}

function isValidDate(value) {
  if (value === undefined || value === null || value === '') return false;
  const d = new Date(String(value));
  return !Number.isNaN(d.getTime());
}

function ensureNonEmptyString(errors, file, fm, key) {
  const v = fm[key];
  if (typeof v !== 'string' || v.trim() === '') errors.push(`${file}: '${key}' vazio`);
}

function ensureArrayNonEmpty(errors, file, fm, key) {
  const v = fm[key];
  if (!Array.isArray(v) || v.length === 0) errors.push(`${file}: '${key}' precisa ser lista não vazia`);
}

async function main() {
  const files = (await readdir(PUBLICACOES_DIR)).filter((f) => f.endsWith('.md'));
  if (files.length === 0) {
    process.stdout.write('Nenhuma publicação encontrada.\n');
    return;
  }

  const existingSlugs = new Set(files.map((f) => f.replace(/\.md$/i, '')));
  const errors = [];

  for (const file of files) {
    const fullPath = path.join(PUBLICACOES_DIR, file);
    const md = await readFile(fullPath, 'utf8');
    const fm = parseFrontmatter(md);

    if (!fm) {
      errors.push(`${file}: frontmatter ausente`);
      continue;
    }

    const status = fm.status;
    if (typeof status !== 'string' || !STATUSES.has(status)) {
      errors.push(`${file}: status inválido '${status ?? ''}'`);
    }

    const slugFromFilename = file.replace(/\.md$/i, '');
    if (fm.slug && fm.slug !== slugFromFilename) {
      errors.push(`${file}: slug '${fm.slug}' != filename '${slugFromFilename}'`);
    }

    // Base (schema mínimo para não quebrar build/content)
    for (const k of ['title', 'dek', 'slug', 'type', 'domain', 'language', 'authors', 'status', 'published_at']) {
      if (fm[k] === undefined) errors.push(`${file}: faltando '${k}'`);
    }

    if (status === 'draft' || status === 'review' || status === 'published') {
      ensureNonEmptyString(errors, file, fm, 'title');
      ensureNonEmptyString(errors, file, fm, 'dek');
      ensureNonEmptyString(errors, file, fm, 'type');
      ensureNonEmptyString(errors, file, fm, 'domain');
      ensureArrayNonEmpty(errors, file, fm, 'authors');
    }

    if (status === 'review' || status === 'published') {
      if (!isNonEmptyBody(md)) errors.push(`${file}: body vazio (review/published exigem conteúdo)`);
    }

    if (status === 'published') {
      if (!isValidDate(fm.published_at)) errors.push(`${file}: published_at inválido`);
      if (hasPlaceholders(md)) errors.push(`${file}: contém placeholder/TODO/comment (published não permite)`);

      if (fm.related !== undefined) {
        if (!Array.isArray(fm.related)) {
          errors.push(`${file}: related deve ser lista`);
        } else {
          if (fm.related.length > 3) errors.push(`${file}: related > 3`);
          for (const rel of fm.related) {
            const relSlug = String(rel).trim();
            if (!existingSlugs.has(relSlug)) errors.push(`${file}: related slug inexistente: '${relSlug}'`);
          }
        }
      }
    }

    if (status === 'archived') {
      // archived: apenas garantir frontmatter básico presente (sem exigir conteúdo/publicação ativa)
      for (const k of ['title', 'slug', 'status']) {
        if (fm[k] === undefined) errors.push(`${file}: faltando '${k}' (archived)`);
      }
    }
  }

  if (errors.length) {
    process.stderr.write(`CHECK FAIL (${errors.length}):\n`);
    for (const e of errors) process.stderr.write(`- ${e}\n`);
    process.exitCode = 1;
    return;
  }

  process.stdout.write(`CHECK OK (${files.length}): regras por status aplicadas.\n`);
}

main().catch((err) => {
  process.stderr.write(`${err?.message || String(err)}\n`);
  process.exitCode = 1;
});
