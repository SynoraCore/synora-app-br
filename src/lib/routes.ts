import type { Edition, ProtocolId } from './protocolos';

export type Route = {
  route_id: string; // slug da intenção
  edition: Edition;
  protocol_id: ProtocolId;
  question: string;
};

function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildRoutes(): Route[] {
  const routes: Route[] = [];

  const byProtocol: Record<ProtocolId, Record<Edition, string[]>> = {
    P001: {
      'pt-br': [
        'Por que a IA me responde de forma genérica?',
        'Como fazer a IA entender contexto?',
        'Como pedir passo a passo sem ela inventar?',
        'Como escrever prompts que realmente funcionem?',
        'Como melhorar resultados com IA no trabalho?',
        'Como evitar alucinações/erros em respostas?',
        'Qual a melhor estrutura de prompt?',
        'Como pedir para revisar/checar a própria resposta?',
        'Como dar exemplos e restrições no prompt?',
        'Como transformar uma tarefa em instruções claras?',
      ],
      'es-ar': [
        '¿Por qué la IA responde de forma genérica?',
        '¿Cómo hacer que la IA entienda contexto?',
        '¿Cómo pedir paso a paso sin que invente?',
        '¿Cómo escribir prompts que realmente funcionen?',
        '¿Cómo mejorar resultados con IA en el trabajo?',
        '¿Cuál es la mejor estructura de prompt?',
        '¿Cómo evitar alucinaciones/errores?',
        '¿Cómo pedir que revise/verifique su propia respuesta?',
        '¿Cómo dar ejemplos y restricciones en el prompt?',
        '¿Cómo convertir una tarea en instrucciones claras?',
      ],
      'es-cl': [
        '¿Por qué la IA responde de forma genérica?',
        '¿Cómo hacer que la IA entienda contexto?',
        '¿Cómo pedir paso a paso sin que invente?',
        '¿Cómo escribir prompts que realmente funcionen?',
        '¿Cómo mejorar resultados con IA en el trabajo?',
        '¿Cuál es la mejor estructura de prompt?',
        '¿Cómo evitar alucinaciones/errores?',
        '¿Cómo pedir que revise/verifique su propia respuesta?',
        '¿Cómo dar ejemplos y restricciones en el prompt?',
        '¿Cómo convertir una tarea en instrucciones claras?',
      ],
    },
    P002: {
      'pt-br': [
        'O que dá para fazer em 3 dias em uma cidade?',
        'Como montar um roteiro sem perder tempo?',
        'Quanto custa uma viagem de 3 dias?',
        'Como escolher prioridades do que fazer?',
        'Como organizar viagem em casal/família?',
        'Como planejar viagem gastando pouco?',
        'Checklist do que levar para 3 dias',
        'Como dividir roteiro por bairros/zonas?',
        'Como evitar perrengues (chuva, filas, deslocamento)?',
        'Como equilibrar passeio e descanso?',
      ],
      'es-ar': [
        '¿Qué se puede hacer en 3 días en una ciudad?',
        '¿Cómo armar un itinerario sin perder tiempo?',
        '¿Cuánto cuesta un viaje de 3 días?',
        '¿Cómo elegir prioridades de qué hacer?',
        '¿Cómo organizar un viaje en pareja/familia?',
        '¿Cómo planificar un viaje gastando menos?',
        'Checklist de qué llevar para 3 días',
        '¿Cómo dividir el itinerario por zonas?',
        '¿Cómo evitar problemas (lluvia, filas, traslados)?',
        '¿Cómo equilibrar paseo y descanso?',
      ],
      'es-cl': [
        '¿Qué se puede hacer en 3 días en una ciudad?',
        '¿Cómo armar un itinerario sin perder tiempo?',
        '¿Cuánto cuesta un viaje de 3 días?',
        '¿Cómo elegir prioridades de qué hacer?',
        '¿Cómo organizar un viaje en pareja/familia?',
        '¿Cómo planificar un viaje gastando menos?',
        'Checklist de qué llevar para 3 días',
        '¿Cómo dividir el itinerario por zonas?',
        '¿Cómo evitar problemas (lluvia, filas, traslados)?',
        '¿Cómo equilibrar paseo y descanso?',
      ],
    },
    P003: {
      'pt-br': [
        'Como fazer um currículo bom rápido?',
        'O que colocar no resumo profissional?',
        'Como descrever experiência sem ficar genérico?',
        'Como adaptar currículo para uma vaga específica?',
        'Currículo de 1 página ou 2?',
        'Como montar currículo sem experiência?',
        'Como colocar projetos no currículo?',
        'Como deixar currículo compatível com ATS?',
        'Como escolher palavras-chave da vaga?',
        'Como organizar competências sem mentir?',
      ],
      'es-ar': [
        '¿Cómo armar un CV bueno rápido?',
        '¿Qué poner en el resumen profesional?',
        '¿Cómo describir experiencia sin sonar genérico?',
        '¿Cómo adaptar el CV a una vacante específica?',
        '¿CV de 1 página o 2?',
        '¿Cómo armar CV sin experiencia?',
        '¿Cómo poner proyectos en el CV?',
        '¿Cómo dejar el CV compatible con ATS?',
        '¿Cómo elegir palabras clave de la vacante?',
        '¿Cómo organizar competencias sin mentir?',
      ],
      'es-cl': [
        '¿Cómo armar un CV bueno rápido?',
        '¿Qué poner en el resumen profesional?',
        '¿Cómo describir experiencia sin sonar genérico?',
        '¿Cómo adaptar el CV a una vacante específica?',
        '¿CV de 1 página o 2?',
        '¿Cómo armar CV sin experiencia?',
        '¿Cómo poner proyectos en el CV?',
        '¿Cómo dejar el CV compatible con ATS?',
        '¿Cómo elegir palabras clave de la vacante?',
        '¿Cómo organizar competencias sin mentir?',
      ],
    },
    P004: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P005: {
      'pt-br': [
        'Vale a pena trocar de carro agora?',
        'Quanto do meu salário posso gastar com carro?',
        'Carro novo ou usado?',
        'Quanto custa realmente manter um carro?',
        'Quando não vale a pena trocar de carro?',
        'Financiar ou comprar à vista?',
        'O que olhar antes de comprar carro usado?',
        'Como comparar dois carros de forma justa?',
        'Como calcular custo total (seguro, IPVA, manutenção)?',
        'Qual carro atende meu uso (cidade/estrada/família)?',
      ],
      'es-ar': [
        '¿Conviene cambiar el auto ahora?',
        '¿Cuánto del sueldo puedo gastar en auto?',
        '¿Auto nuevo o usado?',
        '¿Cuánto cuesta realmente mantener un auto?',
        '¿Cuándo no conviene cambiar el auto?',
        '¿Financiar o comprar al contado?',
        '¿Qué mirar antes de comprar un usado?',
        '¿Cómo comparar dos autos de forma justa?',
        '¿Cómo calcular costo total (seguro, patente, mantenimiento)?',
        '¿Qué auto se ajusta a mi uso (ciudad/ruta/familia)?',
      ],
      'es-cl': [
        '¿Conviene cambiar el auto ahora?',
        '¿Cuánto del sueldo puedo gastar en auto?',
        '¿Auto nuevo o usado?',
        '¿Cuánto cuesta realmente mantener un auto?',
        '¿Cuándo no conviene cambiar el auto?',
        '¿Financiar o comprar al contado?',
        '¿Qué mirar antes de comprar un usado?',
        '¿Cómo comparar dos autos de forma justa?',
        '¿Cómo calcular costo total (seguro, permiso, mantención)?',
        '¿Qué auto se ajusta a mi uso (ciudad/ruta/familia)?',
      ],
    },
    P006: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P007: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P008: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P009: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P010: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
    P011: { 'pt-br': [], 'es-ar': [], 'es-cl': [] },
  };

  (Object.keys(byProtocol) as ProtocolId[]).forEach((protocolId) => {
    (Object.keys(byProtocol[protocolId]) as Edition[]).forEach((edition) => {
      byProtocol[protocolId][edition].forEach((q) => {
        const base = `${protocolId}-${slugify(q)}`;
        routes.push({ route_id: base, edition, protocol_id: protocolId, question: q });
      });
    });
  });

  return routes;
}
