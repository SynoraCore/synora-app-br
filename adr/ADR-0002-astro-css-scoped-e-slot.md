# ADR-0002 — Astro: CSS scoped em Layout + conteúdo via slot

- **Data:** 2026-08-06
- **Status:** Aceito

## Contexto
O `/links` foi implementado com um `LinksLayout.astro` contendo CSS no próprio layout (tag `<style>` padrão, com escopo).

O layout injeta o conteúdo da página via `<slot />`.

Em Astro, CSS “scoped” é aplicado por meio de atributos `data-astro-cid-*`. Elementos renderizados dentro de um `<slot />` não recebem automaticamente o mesmo `data-astro-cid-*` do layout, então seletores como `.wrap`, `.link`, etc. definidos no layout deixam de casar com o markup slotted.

## Decisão
Quando um layout precisar estilizar markup projetado via `<slot />`, usar uma das opções:

- aplicar estilos via `<style is:global>`, ou
- usar `:global(...)` em seletor específico, ou
- mover os estilos para o componente que “é dono” do markup.

No caso do `/links`, a correção adotada foi `LinksLayout.astro` com `<style is:global>`.

## Consequências
- Evita recorrência do “CSS sumiu em produção” por mismatch de `data-astro-cid-*` no conteúdo slotted.
- Mantém o layout visual e a acessibilidade estáveis sem acoplamento frágil ao mecanismo de escopo.

