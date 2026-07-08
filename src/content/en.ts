import type { LocaleContent } from './types';

export const en: LocaleContent = {
  locale: 'en',
  lang: 'en',
  routes: {
    home: { path: '/en/' },
    core: { path: '/en/core/' },
    mediadora: { path: '/en/mediator/' },
    tourism: { path: '/en/tourism/' },
    audio: { path: '/en/audio/' },
    finance: { path: '/en/finance/' },
    international: { path: '/en/international/' }
  },
  nav: {
    home: 'Home',
    infrastructure: 'Infrastructure',
    solutions: 'Solutions',
    about: 'About',
    contact: 'Contact',
    coreCta: 'Core',
    coreLabel: 'Core',
    langSwitch: { pt: 'PT', en: 'EN' }
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
          'An intelligence, governance and operational ecosystem designed to orchestrate trusted digital workflows.',
        canonicalPath: '/en/'
      },
      hero: {
        eyebrow: '● Synora Ecosystem',
        title: 'An institutional foundation for trusted digital workflows.',
        lead: 'Synora is an intelligence, governance and operational ecosystem designed to orchestrate trusted digital workflows — enabling modular solutions to evolve with consistency, traceability and speed.',
        primaryCta: 'Explore architecture',
        secondaryCta: 'Access Core',
        systemPills: ['Governance', 'Interoperability', 'Knowledge', 'Operations']
      },
      infrastructure: {
        kicker: 'Ecosystem Infrastructure',
        title: 'Structural capabilities that sustain every solution.',
        copy: 'Synora establishes shared standards for governance, knowledge, interoperability and operations across the entire ecosystem.',
        tag: 'infra',
        cards: [
          {
            name: 'Synora Core',
            desc: 'The central layer for institutional knowledge, identity, workflows, agents and orchestration.',
            meta: 'Knowledge • Identity • Orchestration',
            actionLabel: 'Access Core',
            actionHref: '/en/core/'
          },
          {
            name: 'Guardian AI',
            desc: 'A governance layer for validation, auditing and certification of critical events.',
            meta: 'Governance • Audit • Trust'
          },
          {
            name: 'Synora International',
            desc: 'A strategic capability to operate natively across countries, languages, currencies and regulatory contexts.',
            meta: 'Global governance • Local execution • Sustainable expansion'
          }
        ]
      },
      solutions: {
        kicker: 'Specialized Solutions',
        title: 'Verticals that create direct value for specific markets.',
        copy: 'Each solution applies the same principles, capabilities and operational standards to different market contexts.',
        tag: 'solution',
        cards: [
          {
            name: 'Synora Mediator',
            desc: 'An intelligent platform for financial mediation and reorganization.',
            meta: 'Mediation • Reorganization • Assisted operations'
          },
          {
            name: 'Synora Tourism',
            desc: 'Operational, financial and relationship intelligence for tourism and hospitality.',
            meta: 'Tourism • Hospitality • Relationship'
          },
          {
            name: 'Synora Audio',
            desc: 'Infrastructure to create, protect, distribute and monetize digital assets.',
            meta: 'Creation • Protection • Monetization'
          },
          {
            name: 'Synora Finance',
            desc: 'Intelligent financial infrastructure to manage, organize and automate financial processes.',
            meta: 'Management • Organization • Automation'
          }
        ]
      },
      about: {
        kicker: 'Strategic Principle',
        title: 'Fiboops was the origin. Synora is the evolution.',
        body: 'This evolution is structural. Synora converts the learning accumulated by Fiboops into an architecture capable of sustaining multiple solutions under shared principles of governance, interoperability, knowledge and operational intelligence.'
      },
      contact: {
        kicker: 'Contact',
        title: 'Let’s map the next operation.',
        copy: 'A focused conversation to understand context, challenges and expansion possibilities within the Synora ecosystem.',
        ctaLabel: 'Start a conversation',
        email: 'hello@synora.app.br'
      }
    },
    core: {
      meta: {
        title: 'Synora Core',
        description:
          'The knowledge and governance center of Synora: operational context, architecture, criteria and institutional evolution.',
        canonicalPath: '/en/core/'
      },
      eyebrow: 'Restricted area',
      heroTitle: 'The knowledge and governance center of Synora.',
      heroLead:
        'Core organizes operational context, criteria, architecture and institutional evolution so every vertical can move forward with consistency, trust and continuity.',
      primaryCta: 'View structure',
      secondaryCta: 'Back to Home',
      panel: {
        title: 'Synora Core',
        subtitle: 'Operational context',
        caption: 'Knowledge, governance, architecture and evolution in a central layer.',
        layers: [
          { index: '01', label: 'Knowledge', note: 'Institutional base' },
          { index: '02', label: 'Governance', note: 'Criteria & trust' },
          { index: '03', label: 'Architecture', note: 'Agents & workflows' },
          { index: '04', label: 'Evolution', note: 'Milestones & learning' }
        ]
      },
      statusCards: [
        ['Memory', 'Active', 'Decisions, documents and context preserved'],
        ['Criteria', 'In progress', 'Policies and evidence for sensitive decisions'],
        ['Operations', 'Continuous', 'Agents, workflows and next milestones in order'],
        ['Verticals', 'Connected', 'Mediator, Tourism, Audio and Finance on the same base']
      ],
      principle: {
        kicker: 'Operating principle',
        title: 'Verticals create value. Guardian preserves trust. Core preserves knowledge.',
        body: 'Synora connects these layers into an intelligent, auditable and evolving ecosystem. Core is where institutional context becomes structure, criteria and continuity.'
      },
      commandCenter: {
        kicker: 'Command center',
        title: 'Executive organization for what Synora learns, decides and reuses.',
        copy: 'Core receives information, preserves context, establishes criteria and returns structure so verticals can operate with less friction.',
        pillars: [
          ['Library', 'Foundational documents, reports and decision records.'],
          ['Guardian Center', 'Policies, contracts, evidence and critical validations.'],
          ['The Pack', 'GuGo, Skipper, Piola, Wolf and Guardian with clear roles.'],
          ['Roadmap', 'Milestones, next releases and ecosystem learning.']
        ]
      },
      areas: {
        kicker: 'Core structure',
        title: 'Four areas to keep the ecosystem legible.',
        copy: 'Each area holds a responsibility: preserve knowledge, validate criteria, organize architecture and register evolution.',
        tag: 'core',
        cards: [
          {
            name: 'Knowledge',
            desc: 'An institutional library with foundational documents, principles, decisions and reference materials to guide Synora’s evolution.',
            meta: 'Context • Documents • Foundation'
          },
          {
            name: 'Governance',
            desc: 'A trust layer to register policies, contracts, evidence and validation criteria before sensitive decisions.',
            meta: 'Policies • Audit • Trust'
          },
          {
            name: 'Architecture',
            desc: 'The organization of operational models, agents, workflows and the relationships between Core, Guardian and specialized verticals.',
            meta: 'Workflows • Agents • Orchestration'
          },
          {
            name: 'Evolution',
            desc: 'A record of milestones, lessons learned, next steps and the institutional maturation of the Synora ecosystem.',
            meta: 'Roadmap • Milestones • Learning'
          }
        ]
      },
      trail: {
        kicker: 'How it operates',
        title: 'A simple trail to turn information into criteria.',
        copy: 'Core’s organization ensures every Synora advance leaves a clear trace: origin, criteria and usage.',
        steps: [
          ['Intake', 'Documents, conversations and decisions enter Core as organized context.'],
          ['Criteria', 'Guardian and governance define what needs validation, registration or review.'],
          ['Organization', 'Architecture, agents and workflows turn scattered information into a system.'],
          ['Usage', 'Verticals consume shared knowledge to operate with consistency and speed.']
        ]
      },
      footerLeft: 'Synora Core',
      footerRight: 'Knowledge • Trust • Evolution'
    },
    simple: {
      mediadora: {
        meta: {
          title: 'Synora Mediator',
          description:
            'An intelligent platform for financial mediation and reorganization, supported by governance and assisted operations.',
          canonicalPath: '/en/mediator/'
        },
        kicker: 'Vertical',
        title: 'Mediation and reorganization with operational intelligence.',
        lead: 'A specialized solution built on the same Core and governance, designed for efficiency, traceability and assisted execution.',
        bullets: ['Workflow-driven assisted operations', 'Governed criteria and validations', 'Auditable trail for decisions and events'],
        cta: { label: 'Back to Home', href: '/en/' }
      },
      tourism: {
        meta: {
          title: 'Synora Tourism',
          description:
            'Operational, financial and relationship intelligence for tourism and hospitality, with governance and interoperability.',
          canonicalPath: '/en/tourism/'
        },
        kicker: 'Vertical',
        title: 'Tourism and hospitality with connected operations.',
        lead: 'An operational layer to organize context, relationship and financial processes with shared ecosystem standards.',
        bullets: ['Operational routines and reporting', 'Interoperability standards', 'Governance for critical events'],
        cta: { label: 'Back to Home', href: '/en/' }
      },
      audio: {
        meta: {
          title: 'Synora Audio',
          description:
            'Infrastructure to create, protect, distribute and monetize digital assets with governance and traceability.',
          canonicalPath: '/en/audio/'
        },
        kicker: 'Vertical',
        title: 'Creation and distribution with protection and traceability.',
        lead: 'Infrastructure to operate digital assets with clear criteria, protection, distribution and controlled monetization.',
        bullets: ['Asset protection and integrity', 'Distribution and operational catalog', 'Metrics and traceability'],
        cta: { label: 'Back to Home', href: '/en/' }
      },
      finance: {
        meta: {
          title: 'Synora Finance',
          description:
            'Intelligent financial infrastructure for managing, organizing and automating processes with governance and operational control.',
          canonicalPath: '/en/finance/'
        },
        kicker: 'Vertical',
        title: 'Financial organization with governed automation.',
        lead: 'A vertical to structure routines and financial workflows with continuous operations, interoperability and consistent criteria.',
        bullets: ['Automation with traceability', 'Governance for exceptions and critical events', 'Integration with ecosystem workflows'],
        cta: { label: 'Back to Home', href: '/en/' }
      },
      international: {
        meta: {
          title: 'Synora International',
          description:
            'A strategic capability to operate natively across countries, languages, currencies and regulatory contexts with global governance.',
          canonicalPath: '/en/international/'
        },
        kicker: 'Capability',
        title: 'Global governance. Local execution.',
        lead: 'Synora International adapts architecture, criteria and workflows to operate natively across countries with institutional consistency and local execution.',
        bullets: ['Sustainable expansion strategy', 'Multi-language and multi-currency layer', 'Regulatory adherence and context-driven governance'],
        cta: { label: 'Back to Home', href: '/en/' }
      }
    }
  }
};

