export type Locale = 'pt' | 'es' | 'en';

export type PageMeta = {
  title: string;
  description: string;
  canonicalPath: string;
};

export type RouteKey =
  | 'home'
  | 'core'
  | 'mediadora'
  | 'tourism'
  | 'audio'
  | 'finance'
  | 'international';

export type RouteConfig = Record<RouteKey, { path: string }>;

export type LocaleContent = {
  locale: Locale;
  lang: string;
  routes: RouteConfig;
  nav: {
    home: string;
    infrastructure: string;
    solutions: string;
    about: string;
    contact: string;
    coreCta: string;
    langSwitch: {
      pt: string;
      es: string;
      en: string;
    };
  };
  labels: {
    highlights: string;
  };
  footer: {
    left: string;
    right: string;
  };
  pages: {
    home: {
      meta: PageMeta;
      hero: {
        eyebrow: string;
        title: string;
        lead: string;
        primaryCta: string;
        secondaryCta: string;
        systemPills: [string, string, string, string];
      };
      infrastructure: {
        kicker: string;
        title: string;
        copy: string;
        tag: string;
        cards: Array<{
          name: string;
          desc: string;
          meta: string;
          actionLabel?: string;
          actionHref?: string;
        }>;
      };
      solutions: {
        kicker: string;
        title: string;
        copy: string;
        tag: string;
        cards: Array<{
          name: string;
          desc: string;
          meta: string;
        }>;
      };
      about: {
        kicker: string;
        title: string;
        body: string;
      };
      contact: {
        kicker: string;
        title: string;
        copy: string;
        ctaLabel: string;
        email: string;
      };
    };
    core: {
      meta: PageMeta;
      eyebrow: string;
      heroTitle: string;
      heroLead: string;
      primaryCta: string;
      secondaryCta: string;
      panel: {
        title: string;
        subtitle: string;
        caption: string;
        layers: Array<{ index: string; label: string; note: string }>;
      };
      statusCards: Array<[string, string, string]>;
      principle: {
        kicker: string;
        title: string;
        body: string;
      };
      commandCenter: {
        kicker: string;
        title: string;
        copy: string;
        pillars: Array<[string, string]>;
      };
      areas: {
        kicker: string;
        title: string;
        copy: string;
        tag: string;
        cards: Array<{ name: string; desc: string; meta: string }>;
      };
      trail: {
        kicker: string;
        title: string;
        copy: string;
        steps: Array<[string, string]>;
      };
      footerLeft: string;
      footerRight: string;
    };
    simple: Record<
      Exclude<RouteKey, 'home' | 'core'>,
      {
        meta: PageMeta;
        kicker: string;
        title: string;
        lead: string;
        bullets: string[];
        cta: { label: string; href: string };
      }
    >;
  };
};

