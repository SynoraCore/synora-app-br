import type { LocaleContent } from './types';

export const pt: LocaleContent = {
  locale: 'pt',
  lang: 'pt-BR',
  routes: {
    home: { path: '/pt' },
    core: { path: '/pt/core' },
    mediadora: { path: '/pt/mediadora' },
    tourism: { path: '/pt/tourism' },
    audio: { path: '/pt/audio' },
    finance: { path: '/pt/finance' },
    international: { path: '/pt/international' }
  },
  nav: {
    home: 'Home',
    infrastructure: 'Infraestrutura',
    solutions: 'Soluções',
    about: 'Sobre',
    contact: 'Contato',
    coreCta: 'Core',
    langSwitch: { pt: 'PT', es: 'ES', en: 'EN' }
  },
  labels: {
    highlights: 'Destaques'
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
          'Ecossistema inteligente para governança, interoperabilidade, conhecimento e operações digitais especializadas.',
        canonicalPath: '/pt'
      },
      hero: {
        eyebrow: '● Ecossistema Synora',
        title: 'Infraestrutura inteligente para ecossistemas digitais em evolução.',
        lead: 'Uma fundação comum para construir, operar e evoluir soluções digitais com governança, interoperabilidade, conhecimento e inteligência operacional compartilhadas.',
        primaryCta: 'Explorar arquitetura',
        secondaryCta: 'Acessar Core',
        systemPills: ['Governança', 'Interoperabilidade', 'Conhecimento', 'Operação']
      },
      infrastructure: {
        kicker: 'Infraestrutura do Ecossistema',
        title: 'Capacidades estruturais que sustentam todas as soluções.',
        copy: 'As capacidades estruturais da Synora estabelecem padrões compartilhados de governança, conhecimento, interoperabilidade e operação para todo o ecossistema.',
        tag: 'infra',
        cards: [
          {
            name: 'Synora Core',
            desc: 'Núcleo central responsável por conhecimento, identidade, workflows, agentes e orquestração.',
            meta: 'Conhecimento • Identidade • Orquestração',
            actionLabel: 'Acessar Core',
            actionHref: '/pt/core'
          },
          {
            name: 'Guardian AI',
            desc: 'Camada de governança, validação, auditoria e certificação de eventos críticos.',
            meta: 'Governança • Auditoria • Confiança'
          },
          {
            name: 'Synora Internacional',
            desc: 'Capacidade estratégica que adapta soluções para operar de forma nativa em países, idiomas, moedas e contextos regulatórios.',
            meta: 'Governança global • Operação local • Expansão sustentável'
          }
        ]
      },
      solutions: {
        kicker: 'Soluções Especializadas',
        title: 'Verticais que geram valor direto para mercados específicos.',
        copy: 'As soluções especializadas aplicam os mesmos princípios, capacidades e padrões operacionais em diferentes contextos de mercado.',
        tag: 'solução',
        cards: [
          {
            name: 'Synora Mediadora',
            desc: 'Plataforma inteligente para mediação e reorganização financeira.',
            meta: 'Mediação • Reorganização • Operação assistida',
            href: '/pt/mediadora'
          },
          {
            name: 'Synora Tourism',
            desc: 'Clareza sobre a dinâmica do território para coordenar decisões no turismo e na hospitalidade.',
            meta: 'Território • Decisão • Coordenação',
            href: '/pt/tourism'
          },
          {
            name: 'Synora Audio',
            desc: 'Infraestrutura para criação, proteção, distribuição e monetização de ativos digitais.',
            meta: 'Criação • Proteção • Monetização',
            href: '/pt/audio'
          },
          {
            name: 'Synora Finance',
            desc: 'Infraestrutura financeira inteligente para gestão, organização e automação de processos financeiros.',
            meta: 'Gestão • Organização • Automação financeira',
            href: '/pt/finance'
          }
        ]
      },
      about: {
        kicker: 'Princípio Estratégico',
        title: 'Fiboops foi a origem. Synora é a evolução.',
        body: 'A evolução é estrutural. A Synora transforma o aprendizado acumulado pela Fiboops em uma arquitetura capaz de sustentar múltiplas soluções sob princípios compartilhados de governança, interoperabilidade, conhecimento e inteligência operacional.'
      },
      contact: {
        kicker: 'Contato',
        title: 'Vamos mapear a próxima operação.',
        copy: 'Uma conversa para compreender contexto, desafios e possibilidades de evolução dentro do ecossistema Synora.',
        ctaLabel: 'Iniciar conversa',
        email: 'hello@synora.app.br'
      }
    },
    core: {
      meta: {
        title: 'Synora Core',
        description:
          'Centro de conhecimento e governança da Synora: contexto operacional, arquitetura, critérios e evolução institucional.',
        canonicalPath: '/pt/core'
      },
      eyebrow: 'Área restrita',
      heroTitle: 'O centro de conhecimento e governança da Synora.',
      heroLead:
        'O Core organiza memória, critérios, arquitetura e evolução institucional para que cada vertical avance com coerência, confiança e continuidade.',
      primaryCta: 'Ver estrutura',
      secondaryCta: 'Voltar para Home',
      panel: {
        title: 'Synora Core',
        subtitle: 'Contexto operacional',
        caption: 'Conhecimento, governança, arquitetura e evolução em uma camada central.',
        layers: [
          { index: '01', label: 'Conhecimento', note: 'Base institucional' },
          { index: '02', label: 'Governança', note: 'Critérios e confiança' },
          { index: '03', label: 'Arquitetura', note: 'Agentes e workflows' },
          { index: '04', label: 'Evolução', note: 'Marcos e aprendizado' }
        ]
      },
      statusCards: [
        ['Memória', 'Ativa', 'Decisões, documentos e contexto preservados'],
        ['Critério', 'Em estruturação', 'Políticas e evidências para decisão sensível'],
        ['Operação', 'Contínua', 'Agentes, fluxos e próximos marcos em ordem'],
        ['Verticais', 'Conectadas', 'Mediadora, Tourism, Audio e Finance sobre a mesma base']
      ],
      principle: {
        kicker: 'Princípio operacional',
        title: 'As verticais geram valor. O Guardian preserva confiança. O Core preserva conhecimento.',
        body: 'A Synora conecta essas camadas em um ecossistema inteligente, auditável e evolutivo. O Core é o lugar onde o contexto institucional ganha forma, critério e continuidade.'
      },
      commandCenter: {
        kicker: 'Centro de comando',
        title: 'Organização executiva para o que a Synora aprende, decide e reaproveita.',
        copy: 'O Core recebe informação, preserva contexto, estabelece critério e devolve estrutura para as verticais operarem com menos atrito.',
        pillars: [
          ['Biblioteca', 'Documentos fundacionais, relatórios e registros de decisão.'],
          ['Guardian Center', 'Políticas, contratos, evidências e validações críticas.'],
          ['Matilha', 'GuGo, Skipper, Piola, Wolf e Guardian em papéis claros.'],
          ['Roadmap', 'Marcos, próximas entregas e aprendizados do ecossistema.']
        ]
      },
      areas: {
        kicker: 'Estrutura do Core',
        title: 'Quatro áreas para manter o ecossistema legível.',
        copy: 'Cada área guarda um tipo de responsabilidade: preservar conhecimento, validar critério, organizar arquitetura e registrar evolução.',
        tag: 'core',
        cards: [
          {
            name: 'Conhecimento',
            desc: 'Biblioteca institucional com documentos fundacionais, princípios, decisões e materiais de referência para orientar a evolução da Synora.',
            meta: 'Contexto • Documentos • Fundamento'
          },
          {
            name: 'Governança',
            desc: 'Camada de confiança para registrar políticas, contratos, evidências e critérios de validação antes de decisões sensíveis.',
            meta: 'Políticas • Auditoria • Confiança'
          },
          {
            name: 'Arquitetura',
            desc: 'Organização dos modelos operacionais, agentes, workflows e relações entre Core, Guardian e verticais especializadas.',
            meta: 'Workflows • Agentes • Orquestração'
          },
          {
            name: 'Evolução',
            desc: 'Registro dos marcos, aprendizados, próximas etapas e amadurecimento institucional do ecossistema Synora.',
            meta: 'Roadmap • Marcos • Aprendizado'
          }
        ]
      },
      trail: {
        kicker: 'Como opera',
        title: 'Uma trilha simples para transformar informação em critério.',
        copy: 'A organização do Core permite que cada avanço da Synora deixe rastro claro: origem, critério e uso.',
        steps: [
          ['Entrada', 'Documentos, conversas e decisões entram no Core como contexto organizado.'],
          ['Critério', 'Guardian e governança definem o que precisa de validação, registro ou revisão.'],
          ['Organização', 'Arquitetura, agentes e workflows transformam informação dispersa em sistema.'],
          ['Uso', 'Verticais acessam conhecimento comum para operar com coerência e velocidade.']
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
            'Plataforma inteligente para mediação e reorganização financeira, sustentada por governança e operação assistida.',
          canonicalPath: '/pt/mediadora'
        },
        kicker: 'Vertical',
        title: 'Todo acordo começa quando existe uma compreensão compartilhada da realidade.',
        lead: 'A plataforma não existe para impor decisões. Ela existe para construir acordos.',
        bullets: [
          'Resolução como infraestrutura: não depende de improviso operacional.',
          'Disciplina institucional: processos estruturados para decisões sensíveis.',
          'Reduz risco operacional e cria previsibilidade para escalar processos de mediação, negociação e resolução.'
        ],
        cta: { label: 'Vamos conversar.', href: '/pt#contato' }
      },
      tourism: {
        meta: {
          title: 'Synora Tourism',
          description:
            'Inteligência operacional, financeira e de relacionamento para turismo e hospitalidade, com governança e interoperabilidade.',
          canonicalPath: '/pt/tourism'
        },
	        kicker: 'Vertical',
	        title: 'Antes de promover um destino, compreenda-o.',
	        lead: 'Decisões melhores começam com uma compreensão clara do território.',
	        bullets: ['Compreensão do território', 'Coordenação entre atores', 'Mudanças no território'],
	        cta: { label: 'Vamos conversar.', href: '/pt#contato' }
	      },
      audio: {
        meta: {
          title: 'Synora Audio',
          description: 'Infraestrutura para criação, proteção, distribuição e monetização de ativos digitais, com governança e rastreabilidade.',
          canonicalPath: '/pt/audio'
        },
        kicker: 'Vertical',
        title: 'Criação e distribuição com proteção e rastreabilidade.',
        lead: 'Infraestrutura para operar ativos digitais com critérios claros, proteção, distribuição e possibilidade de monetização controlada.',
        bullets: ['Proteção e integridade de ativos', 'Distribuição e catálogo operacional', 'Métricas e rastreabilidade'],
        cta: { label: 'Voltar para Home', href: '/pt' }
      },
      finance: {
        meta: {
          title: 'Synora Finance',
          description:
            'Infraestrutura financeira inteligente para gestão, organização e automação de processos, com governança e controle operacional.',
          canonicalPath: '/pt/finance'
        },
        kicker: 'Vertical',
        title: 'Organização financeira com automação governada.',
        lead: 'Uma vertical para estruturar rotinas e fluxos financeiros com operação contínua, interoperabilidade e critérios consistentes.',
        bullets: ['Automação com rastreabilidade', 'Governança para exceções e eventos críticos', 'Integração com workflows do ecossistema'],
        cta: { label: 'Voltar para Home', href: '/pt' }
      },
      international: {
        meta: {
          title: 'Synora Internacional',
          description:
            'Capacidade estratégica para operar de forma nativa em países, idiomas, moedas e contextos regulatórios, com governança global.',
          canonicalPath: '/pt/international'
        },
        kicker: 'Capacidade',
        title: 'Governança global. Operação local.',
        lead: 'Synora Internacional adapta arquitetura, critérios e workflows para operar de forma nativa em diferentes países, com consistência institucional e execução local.',
        bullets: ['Estratégia de expansão sustentável', 'Camada multilíngue e multicurrency', 'Aderência regulatória e governança por contexto'],
        cta: { label: 'Voltar para Home', href: '/pt' }
      }
    }
  }
};
