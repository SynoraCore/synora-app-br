export type Edition = 'pt-br' | 'es-ar' | 'es-cl';

export type Market = 'BR' | 'AR' | 'CL';

export type Money = {
  amount: number;
  currency: 'BRL' | 'ARS' | 'CLP';
  display: string;
};

export type ProtocolId = 'P001' | 'P002' | 'P003' | 'P004' | 'P005' | 'P006' | 'P007' | 'P008' | 'P009' | 'P010' | 'P011';

export type ProtocolStatus = 'live' | 'coming_soon';

export type Protocol = {
  protocol_id: ProtocolId;
  status: ProtocolStatus;
  slug: Record<Edition, string>;
  title: Record<Edition, string>;
  promise: Record<Edition, string>;
  deliverables: Record<Edition, string[]>;
  primary_cta: Record<Edition, string>;
  price: Record<Market, Money>;
  cross_sell: ProtocolId[];
};

export const EDITIONS: Array<{ edition: Edition; market: Market; lang: string }> = [
  { edition: 'pt-br', market: 'BR', lang: 'pt-BR' },
  { edition: 'es-ar', market: 'AR', lang: 'es-AR' },
  { edition: 'es-cl', market: 'CL', lang: 'es-CL' },
];

export const PROTOCOLS: Protocol[] = [
  {
    protocol_id: 'P001',
    status: 'live',
    slug: {
      'pt-br': 'prompts-que-funcionam',
      'es-ar': 'prompts-que-funcionan',
      'es-cl': 'prompts-que-funcionan',
    },
    title: {
      'pt-br': 'Prompts que realmente funcionam',
      'es-ar': 'Prompts que realmente funcionan',
      'es-cl': 'Prompts que realmente funcionan',
    },
    promise: {
      'pt-br': 'Aprenda um método simples para escrever prompts que geram respostas úteis e repetíveis.',
      'es-ar': 'Aprendé un método simple para escribir prompts que generan respuestas útiles y repetibles.',
      'es-cl': 'Aprende un método simple para escribir prompts que generan respuestas útiles y repetibles.',
    },
    deliverables: {
      'pt-br': ['Framework de prompt (Synora Prompt Framework)', 'Checklist de qualidade', 'Prompts modelo reutilizáveis'],
      'es-ar': ['Framework de prompt (Synora Prompt Framework)', 'Checklist de calidad', 'Prompts modelo reutilizables'],
      'es-cl': ['Framework de prompt (Synora Prompt Framework)', 'Checklist de calidad', 'Prompts modelo reutilizables'],
    },
    primary_cta: {
      'pt-br': 'Melhorar meus prompts',
      'es-ar': 'Mejorar mis prompts',
      'es-cl': 'Mejorar mis prompts',
    },
    price: {
      BR: { amount: 5.99, currency: 'BRL', display: 'R$ 5,99' },
      AR: { amount: 0, currency: 'ARS', display: 'ARS (em breve)' },
      CL: { amount: 0, currency: 'CLP', display: 'CLP (em breve)' },
    },
    cross_sell: ['P002', 'P003', 'P005'],
  },
  {
    protocol_id: 'P002',
    status: 'coming_soon',
    slug: {
      'pt-br': 'planejar-viagem-3-dias',
      'es-ar': 'planificar-viaje-3-dias',
      'es-cl': 'planificar-viaje-3-dias',
    },
    title: {
      'pt-br': 'Planeje uma viagem de 3 dias',
      'es-ar': 'Planificá un viaje de 3 días',
      'es-cl': 'Planifica un viaje de 3 días',
    },
    promise: {
      'pt-br': 'Roteiro + orçamento + prioridades + checklist, pronto para executar.',
      'es-ar': 'Itinerario + presupuesto + prioridades + checklist, listo para ejecutar.',
      'es-cl': 'Itinerario + presupuesto + prioridades + checklist, listo para ejecutar.',
    },
    deliverables: {
      'pt-br': ['Roteiro por dia', 'Orçamento estimado', 'Prioridades', 'Checklist de preparação'],
      'es-ar': ['Itinerario por día', 'Presupuesto estimado', 'Prioridades', 'Checklist de preparación'],
      'es-cl': ['Itinerario por día', 'Presupuesto estimado', 'Prioridades', 'Checklist de preparación'],
    },
    primary_cta: {
      'pt-br': 'Planejar minha viagem',
      'es-ar': 'Planificar mi viaje',
      'es-cl': 'Planificar mi viaje',
    },
    price: {
      BR: { amount: 4.99, currency: 'BRL', display: 'R$ 4,99' },
      AR: { amount: 0, currency: 'ARS', display: 'ARS (em breve)' },
      CL: { amount: 0, currency: 'CLP', display: 'CLP (em breve)' },
    },
    cross_sell: ['P006', 'P011'],
  },
  {
    protocol_id: 'P003',
    status: 'coming_soon',
    slug: {
      'pt-br': 'curriculo-profissional',
      'es-ar': 'curriculum-profesional',
      'es-cl': 'curriculum-profesional',
    },
    title: {
      'pt-br': 'Construa um currículo profissional',
      'es-ar': 'Armá un currículum profesional',
      'es-cl': 'Arma un currículum profesional',
    },
    promise: {
      'pt-br': 'Organize sua experiência e produza um CV estruturado, pronto para enviar.',
      'es-ar': 'Organizá tu experiencia y armá un CV estructurado, listo para enviar.',
      'es-cl': 'Organiza tu experiencia y arma un CV estructurado, listo para enviar.',
    },
    deliverables: {
      'pt-br': ['CV estruturado', 'Bullets de impacto', 'Resumo profissional', 'Checklist de revisão'],
      'es-ar': ['CV estructurado', 'Bullets de impacto', 'Resumen profesional', 'Checklist de revisión'],
      'es-cl': ['CV estructurado', 'Bullets de impacto', 'Resumen profesional', 'Checklist de revisión'],
    },
    primary_cta: {
      'pt-br': 'Criar meu currículo',
      'es-ar': 'Crear mi CV',
      'es-cl': 'Crear mi CV',
    },
    price: {
      BR: { amount: 4.99, currency: 'BRL', display: 'R$ 4,99' },
      AR: { amount: 0, currency: 'ARS', display: 'ARS (em breve)' },
      CL: { amount: 0, currency: 'CLP', display: 'CLP (em breve)' },
    },
    cross_sell: ['P007', 'P008'],
  },
  {
    protocol_id: 'P004',
    status: 'coming_soon',
    slug: {
      'pt-br': 'emails-profissionais-para-clientes',
      'es-ar': 'emails-profesionales-para-clientes',
      'es-cl': 'emails-profesionales-para-clientes',
    },
    title: {
      'pt-br': 'Escreva e-mails profissionais para clientes',
      'es-ar': 'Escribí emails profesionales a clientes',
      'es-cl': 'Escribe emails profesionales a clientes',
    },
    promise: {
      'pt-br': 'Estruture comunicação, alinhamento e registro com clareza.',
      'es-ar': 'Estructurá comunicación, alineación y registro con claridad.',
      'es-cl': 'Estructura comunicación, alineación y registro con claridad.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P005',
    status: 'coming_soon',
    slug: {
      'pt-br': 'antes-de-trocar-de-carro',
      'es-ar': 'antes-de-cambiar-el-auto',
      'es-cl': 'antes-de-cambiar-el-auto',
    },
    title: {
      'pt-br': 'Antes de trocar de carro',
      'es-ar': 'Antes de cambiar el auto',
      'es-cl': 'Antes de cambiar el auto',
    },
    promise: {
      'pt-br': 'Organize orçamento, necessidade e critérios antes de começar a procurar.',
      'es-ar': 'Organizá presupuesto, necesidad y criterios antes de empezar a buscar.',
      'es-cl': 'Organiza presupuesto, necesidad y criterios antes de empezar a buscar.',
    },
    deliverables: {
      'pt-br': ['Perfil de necessidade', 'Orçamento e limite seguro', 'Critérios de compra', 'Checklist de pendências'],
      'es-ar': ['Perfil de necesidad', 'Presupuesto y límite seguro', 'Criterios de compra', 'Checklist de pendientes'],
      'es-cl': ['Perfil de necesidad', 'Presupuesto y límite seguro', 'Criterios de compra', 'Checklist de pendientes'],
    },
    primary_cta: {
      'pt-br': 'Analisar minha decisão',
      'es-ar': 'Analizar mi decisión',
      'es-cl': 'Analizar mi decisión',
    },
    price: {
      BR: { amount: 4.99, currency: 'BRL', display: 'R$ 4,99' },
      AR: { amount: 0, currency: 'ARS', display: 'ARS (em breve)' },
      CL: { amount: 0, currency: 'CLP', display: 'CLP (em breve)' },
    },
    cross_sell: ['P006', 'P009'],
  },
  {
    protocol_id: 'P006',
    status: 'coming_soon',
    slug: {
      'pt-br': 'organize-seu-orcamento-mensal',
      'es-ar': 'organiza-tu-presupuesto-mensual',
      'es-cl': 'organiza-tu-presupuesto-mensual',
    },
    title: {
      'pt-br': 'Organize seu orçamento mensal',
      'es-ar': 'Organizá tu presupuesto mensual',
      'es-cl': 'Organiza tu presupuesto mensual',
    },
    promise: {
      'pt-br': 'Ganhe clareza do mês e tome decisões sem improviso.',
      'es-ar': 'Ganá claridad del mes y tomá decisiones sin improvisar.',
      'es-cl': 'Gana claridad del mes y toma decisiones sin improvisar.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P007',
    status: 'coming_soon',
    slug: {
      'pt-br': 'prepare-se-para-uma-entrevista',
      'es-ar': 'preparate-para-una-entrevista',
      'es-cl': 'preparate-para-una-entrevista',
    },
    title: {
      'pt-br': 'Prepare-se para uma entrevista de emprego',
      'es-ar': 'Preparáte para una entrevista laboral',
      'es-cl': 'Prepárate para una entrevista laboral',
    },
    promise: {
      'pt-br': 'Organize respostas, exemplos e narrativa antes da conversa.',
      'es-ar': 'Organizá respuestas, ejemplos y narrativa antes de la conversación.',
      'es-cl': 'Organiza respuestas, ejemplos y narrativa antes de la conversación.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P008',
    status: 'coming_soon',
    slug: {
      'pt-br': 'compare-duas-propostas-de-trabalho',
      'es-ar': 'compara-dos-propuestas-laborales',
      'es-cl': 'compara-dos-propuestas-laborales',
    },
    title: {
      'pt-br': 'Compare duas propostas de trabalho',
      'es-ar': 'Compará dos propuestas laborales',
      'es-cl': 'Compara dos propuestas laborales',
    },
    promise: {
      'pt-br': 'Compare salário, benefícios, risco e evolução com critério.',
      'es-ar': 'Compará salario, beneficios, riesgo y evolución con criterio.',
      'es-cl': 'Compara salario, beneficios, riesgo y evolución con criterio.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P009',
    status: 'coming_soon',
    slug: {
      'pt-br': 'escreva-uma-reclamacao-clara',
      'es-ar': 'escribi-un-reclamo-claro',
      'es-cl': 'escribe-un-reclamo-claro',
    },
    title: {
      'pt-br': 'Escreva uma reclamação de forma clara',
      'es-ar': 'Escribí un reclamo de forma clara',
      'es-cl': 'Escribe un reclamo de forma clara',
    },
    promise: {
      'pt-br': 'Faça um registro objetivo e acionável, com evidência e pedido claro.',
      'es-ar': 'Hacé un registro objetivo y accionable, con evidencia y pedido claro.',
      'es-cl': 'Haz un registro objetivo y accionable, con evidencia y pedido claro.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P010',
    status: 'coming_soon',
    slug: {
      'pt-br': 'organize-seus-estudos-para-uma-prova',
      'es-ar': 'organiza-tu-estudio-para-un-examen',
      'es-cl': 'organiza-tu-estudio-para-un-examen',
    },
    title: {
      'pt-br': 'Organize seus estudos para uma prova',
      'es-ar': 'Organizá tu estudio para un examen',
      'es-cl': 'Organiza tu estudio para un examen',
    },
    promise: {
      'pt-br': 'Transforme matéria em plano semanal, revisões e checkpoints.',
      'es-ar': 'Convertí materia en plan semanal, revisiones y checkpoints.',
      'es-cl': 'Convierte materia en plan semanal, revisiones y checkpoints.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
  {
    protocol_id: 'P011',
    status: 'coming_soon',
    slug: {
      'pt-br': 'planeje-uma-mudanca-de-casa',
      'es-ar': 'planifica-una-mudanza',
      'es-cl': 'planifica-una-mudanza',
    },
    title: {
      'pt-br': 'Planeje uma mudança de casa',
      'es-ar': 'Planificá una mudanza',
      'es-cl': 'Planifica una mudanza',
    },
    promise: {
      'pt-br': 'Checklist, prioridades e cronograma para mudar sem caos.',
      'es-ar': 'Checklist, prioridades y cronograma para mudarte sin caos.',
      'es-cl': 'Checklist, prioridades y cronograma para mudarte sin caos.',
    },
    deliverables: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    primary_cta: { 'pt-br': 'Quero ser avisado', 'es-ar': 'Avisame', 'es-cl': 'Avísame' },
    price: {
      BR: { amount: 0, currency: 'BRL', display: 'Em breve' },
      AR: { amount: 0, currency: 'ARS', display: 'Em breve' },
      CL: { amount: 0, currency: 'CLP', display: 'Em breve' },
    },
    cross_sell: [],
  },
];

export function getProtocolBySlug(edition: Edition, slug: string): Protocol | undefined {
  return PROTOCOLS.find((p) => p.slug[edition] === slug);
}

export function getProtocolById(protocolId: ProtocolId): Protocol | undefined {
  return PROTOCOLS.find((p) => p.protocol_id === protocolId);
}
