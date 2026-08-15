import type { LocaleContent } from './types';

export const es: LocaleContent = {
  locale: 'es',
  lang: 'es',
  routes: {
    home: { path: '/es' },
    core: { path: '/es/core' },
    mediadora: { path: '/es/mediadora' },
    tourism: { path: '/es/tourism' },
    audio: { path: '/es/audio' },
    finance: { path: '/es/finance' },
    international: { path: '/es/international' }
  },
  nav: {
    home: 'Inicio',
    infrastructure: 'Infraestructura',
    solutions: 'Soluciones',
    publications: 'Publicaciones',
    library: 'Biblioteca',
    about: 'Sobre',
    contact: 'Contacto',
    coreCta: 'Core',
    langSwitch: { pt: 'PT', es: 'ES', en: 'EN' }
  },
  labels: {
    highlights: 'Puntos clave'
  },
  footer: {
    left: '© Synora Ecosystem. All rights reserved.',
    right: 'AI • Finance • Infrastructure • Middleware • Audio'
  },
  pages: {
    home: {
      meta: {
        title: 'Synora',
        description:
          'Un ecosistema de inteligencia, gobernanza y operación diseñado para orquestar flujos de trabajo digitales confiables.',
        canonicalPath: '/es'
      },
      hero: {
        eyebrow: '● Ecosistema Synora',
        title: 'Una base institucional para flujos digitales confiables.',
        lead: 'Synora es un ecosistema de inteligencia, gobernanza y operación diseñado para orquestar flujos de trabajo digitales confiables — permitiendo que soluciones modulares evolucionen con consistencia, trazabilidad y velocidad.',
        primaryCta: 'Explorar arquitectura',
        secondaryCta: 'Acceder al Core',
        systemPills: ['Gobernanza', 'Interoperabilidad', 'Conocimiento', 'Operación']
      },
      infrastructure: {
        kicker: 'Infraestructura del Ecosistema',
        title: 'Capacidades estructurales que sustentan cada solución.',
        copy: 'Synora establece estándares compartidos de gobernanza, conocimiento, interoperabilidad y operación para todo el ecosistema.',
        tag: 'infra',
        cards: [
          {
            name: 'Synora Core',
            desc: 'La capa central para conocimiento institucional, identidad, workflows, agentes y orquestación.',
            meta: 'Conocimiento • Identidad • Orquestación',
            actionLabel: 'Acceder al Core',
            actionHref: '/es/core'
          },
          {
            name: 'Guardian AI',
            desc: 'Capa de gobernanza para validación, auditoría y certificación de eventos críticos.',
            meta: 'Gobernanza • Auditoría • Confianza'
          },
          {
            name: 'Synora Internacional',
            desc: 'Capacidad estratégica para operar de forma nativa en países, idiomas, monedas y contextos regulatorios.',
            meta: 'Gobernanza global • Ejecución local • Expansión sostenible'
          }
        ]
      },
      solutions: {
        kicker: 'Soluciones Especializadas',
        title: 'Verticales que generan valor directo para mercados específicos.',
        copy: 'Cada solución aplica los mismos principios, capacidades y estándares operativos en distintos contextos de mercado.',
        tag: 'solución',
        cards: [
          {
            name: 'Synora Mediadora',
            desc: 'Cuando la realidad es comprendida por todos, los acuerdos se vuelven posibles.',
            meta: 'Acuerdos • Evidencias • Coordinación',
            href: '/es/mediadora'
          },
          {
            name: 'Synora Tourism',
            desc: 'Inteligencia operativa, financiera y relacional para turismo y hospitalidad.',
            meta: 'Turismo • Hospitalidad • Relación',
            href: '/es/tourism'
          },
          {
            name: 'Synora Audio',
            desc: 'Infraestructura para crear, proteger, distribuir y monetizar activos digitales.',
            meta: 'Creación • Protección • Monetización',
            href: '/es/audio'
          },
          {
            name: 'Synora Finance',
            desc: 'Infraestructura financiera inteligente para gestionar, organizar y automatizar procesos financieros.',
            meta: 'Gestión • Organización • Automatización',
            href: '/es/finance'
          }
        ]
      },
      about: {
        kicker: 'Principio Estratégico',
        title: 'Fiboops fue el origen. Synora es la evolución.',
        body: 'Esta evolución es estructural. Synora convierte el aprendizaje acumulado por Fiboops en una arquitectura capaz de sostener múltiples soluciones bajo principios compartidos de gobernanza, interoperabilidad, conocimiento e inteligencia operativa.'
      },
      contact: {
        kicker: 'Contacto',
        title: 'Mapeemos la próxima operación.',
        copy: 'Una conversación enfocada para entender contexto, desafíos y posibilidades de expansión dentro del ecosistema Synora.',
        ctaLabel: 'Iniciar conversación',
        email: 'hello@synora.app.br'
      }
    },
    core: {
      meta: {
        title: 'Synora Core',
        description:
          'El centro de conocimiento y gobernanza de Synora: contexto operativo, arquitectura, criterios y evolución institucional.',
        canonicalPath: '/es/core'
      },
      eyebrow: 'Área restringida',
      heroTitle: 'El centro de conocimiento y gobernanza de Synora.',
      heroLead:
        'Core organiza contexto operativo, criterios, arquitectura y evolución institucional para que cada vertical avance con consistencia, confianza y continuidad.',
      primaryCta: 'Ver estructura',
      secondaryCta: 'Volver al inicio',
      panel: {
        title: 'Synora Core',
        subtitle: 'Contexto operativo',
        caption: 'Conocimiento, gobernanza, arquitectura y evolución en una capa central.',
        layers: [
          { index: '01', label: 'Conocimiento', note: 'Base institucional' },
          { index: '02', label: 'Gobernanza', note: 'Criterios y confianza' },
          { index: '03', label: 'Arquitectura', note: 'Agentes y workflows' },
          { index: '04', label: 'Evolución', note: 'Hitos y aprendizaje' }
        ]
      },
      statusCards: [
        ['Memoria', 'Activa', 'Decisiones, documentos y contexto preservados'],
        ['Criterio', 'En progreso', 'Políticas y evidencias para decisiones sensibles'],
        ['Operación', 'Continua', 'Agentes, flujos y próximos hitos en orden'],
        ['Verticales', 'Conectadas', 'Mediadora, Tourism, Audio y Finance sobre la misma base']
      ],
      principle: {
        kicker: 'Principio operativo',
        title: 'Las verticales crean valor. Guardian preserva confianza. Core preserva conocimiento.',
        body: 'Synora conecta estas capas en un ecosistema inteligente, auditable y evolutivo. Core es donde el contexto institucional se convierte en estructura, criterio y continuidad.'
      },
      commandCenter: {
        kicker: 'Centro de comando',
        title: 'Organización ejecutiva para lo que Synora aprende, decide y reutiliza.',
        copy: 'Core recibe información, preserva contexto, establece criterio y devuelve estructura para que las verticales operen con menos fricción.',
        pillars: [
          ['Biblioteca', 'Documentos fundacionales, reportes y registros de decisión.'],
          ['Guardian Center', 'Políticas, contratos, evidencias y validaciones críticas.'],
          ['La Manada', 'GuGo, Skipper, Piola, Wolf y Guardian con roles claros.'],
          ['Roadmap', 'Hitos, próximas entregas y aprendizaje del ecosistema.']
        ]
      },
      areas: {
        kicker: 'Estructura del Core',
        title: 'Cuatro áreas para mantener el ecosistema legible.',
        copy: 'Cada área guarda una responsabilidad: preservar conocimiento, validar criterio, organizar arquitectura y registrar evolución.',
        tag: 'core',
        cards: [
          {
            name: 'Conocimiento',
            desc: 'Biblioteca institucional con documentos fundacionales, principios, decisiones y materiales de referencia para guiar la evolución de Synora.',
            meta: 'Contexto • Documentos • Fundamento'
          },
          {
            name: 'Gobernanza',
            desc: 'Capa de confianza para registrar políticas, contratos, evidencias y criterios de validación antes de decisiones sensibles.',
            meta: 'Políticas • Auditoría • Confianza'
          },
          {
            name: 'Arquitectura',
            desc: 'Organización de modelos operativos, agentes, workflows y relaciones entre Core, Guardian y verticales especializadas.',
            meta: 'Workflows • Agentes • Orquestación'
          },
          {
            name: 'Evolución',
            desc: 'Registro de hitos, aprendizajes, próximos pasos y madurez institucional del ecosistema Synora.',
            meta: 'Roadmap • Hitos • Aprendizaje'
          }
        ]
      },
      trail: {
        kicker: 'Cómo opera',
        title: 'Un camino simple para convertir información en criterio.',
        copy: 'La organización del Core garantiza que cada avance de Synora deje un rastro claro: origen, criterio y uso.',
        steps: [
          ['Entrada', 'Documentos, conversaciones y decisiones ingresan al Core como contexto organizado.'],
          ['Criterio', 'Guardian y gobernanza definen lo que requiere validación, registro o revisión.'],
          ['Organización', 'Arquitectura, agentes y workflows convierten información dispersa en sistema.'],
          ['Uso', 'Las verticales consumen conocimiento compartido para operar con coherencia y velocidad.']
        ]
      },
      footerLeft: 'Synora Core',
      footerRight: 'Knowledge • Trust • Evolution'
    },
    simple: {
      mediadora: {
        meta: {
          title: 'Synora Mediadora',
          description:
            'Plataforma institucional para mediación y reorganización financiera, sostenida por gobernanza y operación asistida.',
          canonicalPath: '/es/mediadora'
        },
        kicker: 'Vertical',
        title: 'Mediación y reorganización con inteligencia operativa.',
        lead: 'Una solución especializada que opera sobre el mismo Core y la misma gobernanza, con foco en eficiencia, trazabilidad y ejecución asistida.',
        bullets: ['Operación asistida por workflow', 'Criterios y validaciones gobernadas', 'Rastro auditable de decisiones y eventos'],
        cta: { label: 'Volver al inicio', href: '/es' }
      },
      tourism: {
        meta: {
          title: 'Synora Tourism',
          description:
            'Inteligencia operativa, financiera y relacional para turismo y hospitalidad, con gobernanza e interoperabilidad.',
          canonicalPath: '/es/tourism'
        },
        kicker: 'Vertical',
        title: 'Turismo y hospitalidad con operación conectada.',
        lead: 'Capa operativa para organizar contexto, relación y procesos financieros del sector con estándares compartidos del ecosistema.',
        bullets: ['Rutinas operativas y reporting', 'Estándares de interoperabilidad', 'Gobernanza para eventos críticos'],
        cta: { label: 'Volver al inicio', href: '/es' }
      },
      audio: {
        meta: {
          title: 'Synora Audio',
          description: 'Infraestructura para crear, proteger, distribuir y monetizar activos digitales con gobernanza y trazabilidad.',
          canonicalPath: '/es/audio'
        },
        kicker: 'Vertical',
        title: 'Creación y distribución con protección y trazabilidad.',
        lead: 'Infraestructura para operar activos digitales con criterios claros, protección, distribución y monetización controlada.',
        bullets: ['Protección e integridad de activos', 'Distribución y catálogo operacional', 'Métricas y trazabilidad'],
        cta: { label: 'Volver al inicio', href: '/es' }
      },
      finance: {
        meta: {
          title: 'Synora Finance',
          description:
            'Infraestructura financiera inteligente para gestión, organización y automatización de procesos con gobernanza y control operativo.',
          canonicalPath: '/es/finance'
        },
        kicker: 'Vertical',
        title: 'Organización financiera con automatización gobernada.',
        lead: 'Una vertical para estructurar rutinas y flujos financieros con operación continua, interoperabilidad y criterios consistentes.',
        bullets: ['Automatización con trazabilidad', 'Gobernanza para excepciones y eventos críticos', 'Integración con workflows del ecosistema'],
        cta: { label: 'Volver al inicio', href: '/es' }
      },
      international: {
        meta: {
          title: 'Synora Internacional',
          description:
            'Capacidad estratégica para operar de forma nativa en países, idiomas, monedas y contextos regulatorios con gobernanza global.',
          canonicalPath: '/es/international'
        },
        kicker: 'Capacidad',
        title: 'Gobernanza global. Ejecución local.',
        lead: 'Synora Internacional adapta arquitectura, criterios y workflows para operar de forma nativa en distintos países con consistencia institucional y ejecución local.',
        bullets: ['Estrategia de expansión sostenible', 'Capa multi-idioma y multi-moneda', 'Adherencia regulatoria y gobernanza por contexto'],
        cta: { label: 'Volver al inicio', href: '/es' }
      }
    }
  }
};
