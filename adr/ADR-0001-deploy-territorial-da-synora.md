# ADR-0001 — Deploy Territorial da Synora

- **Data:** 2026-08-03
- **Status:** Aceito
- **Contexto:** Atlas Institucional — Arquitetura Territorial da Synora (Em Observação)

## Contexto
Até este momento, a Synora operava com um único deployment atendendo múltiplos domínios nacionais.

Com a evolução da Arquitetura Territorial, este modelo passou a representar riscos e limitações institucionais:

- risco de mistura de origem canônica (`canonical`) entre territórios;
- sitemap compartilhado, com possibilidade de indexação cruzada e duplicação;
- metadados Open Graph (`og:url`) sem origem territorial estável;
- limitação da identidade territorial como presença institucional própria por domínio.

Este estado deixava de materializar corretamente o princípio central do Atlas: **um Núcleo Institucional único** e **múltiplas manifestações territoriais**.

## Decisão
A Synora adota oficialmente uma arquitetura de **deployments territoriais independentes**, preservando um único núcleo e um único patrimônio intelectual.

Esta decisão técnica é tomada **em conformidade com o princípio atualmente em Observação** no Atlas Institucional (capítulo “Arquitetura Territorial da Synora”).

Esta arquitetura estabelece:

- um repositório compartilhado;
- builds independentes por território;
- um projeto Vercel por território;
- um domínio institucional por território;
- patrimônio intelectual compartilhado (sem fragmentação).

Arquitetura adotada:

- `synora-app-br` → `synora.app.br`
- `synora-app-cl` → `synora.cl`
- `synora-app-ar` → `synora.ar`

Todos os deployments derivam do mesmo repositório e da mesma base institucional.

## Princípios preservados
Esta decisão preserva e materializa a unidade institucional. Permanecem únicos:

- Core
- Guardian
- Registry
- Atlas
- Canon
- Publicações
- `publication_id` (a ideia permanece única)
- patrimônio intelectual institucional

Cada deployment territorial existe apenas para manifestar o território correspondente, sob a mesma arquitetura institucional.

## Consequências
Esta decisão produz benefícios institucionais e técnicos com impacto direto na coerência pública:

- `canonical` territorial por domínio;
- sitemap territorial por domínio;
- Open Graph (`og:url`) territorial por domínio;
- relacionamento `hreflang` consistente entre edições territoriais de uma mesma publicação;
- SEO independente por país, sem duplicação cruzada;
- identidade institucional própria em cada domínio, com origem estável;
- evolução territorial com independência operacional, sem fragmentar o núcleo.

## Relação com a Arquitetura Territorial
Este ADR é a implementação operacional do capítulo **“Arquitetura Territorial da Synora”** (atualmente **Em Observação**).

Ele não canoniza nem ratifica o princípio do Atlas. Ele registra uma decisão arquitetural que o materializa tecnicamente: a Synora não se expande por cópias linguísticas; ela se expande por territórios institucionais.

## Estado da arquitetura
Estado alcançado:

Núcleo Institucional  
↓  
Repositório único  
↓  
`synora-app-br` → `synora.app.br`  
`synora-app-cl` → `synora.cl`  
`synora-app-ar` → `synora.ar`  
↓  
Patrimônio Intelectual Compartilhado

## Consequências futuras
Novos territórios deverão seguir o mesmo padrão.

A pergunta arquitetural deixa de ser:
> “Vamos traduzir o site?”

E passa a ser:
> “Este novo território necessita de uma manifestação institucional própria?”

Esta decisão orienta futuras expansões internacionais, mantendo coerência institucional e preservando a unidade do patrimônio intelectual.
