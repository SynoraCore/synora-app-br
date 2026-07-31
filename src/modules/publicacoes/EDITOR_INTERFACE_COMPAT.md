# Future Editorial Interface Compatibility (Publicações)

## A. Source of Truth

Publications permanecem como conteúdo versionável no repositório (Git).

## B. ID (Interno)

O ID interno da Content Collection deriva do arquivo/path.

Esse ID **não** deve ser usado como URL pública.

## C. Slug (URL Pública)

`slug` é editorial e controla a URL pública.

`slug` deve ser único por idioma.

## D. Content

O body permanece Markdown no MVP.

## E. Assets

Organização determinística:

`src/content/publicacoes/<locale>/assets/<slug>/`

## F. Hero

`hero` usa asset local validado pelo schema.

`hero_alt` pertence ao conteúdo/metadata.

## G. Status

`draft` · `review` · `published` · `archived`

## H. Future Editor

Uma interface futura pode criar/editar:

- frontmatter
- Markdown
- assets

Sem mudar o renderer ou as URLs públicas.

## I. Não Requerido Agora

Compatibilidade futura **não** implica agora:

CMS, DB, auth, API, painel, automação ou workflow complexo.

