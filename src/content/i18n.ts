import { en } from './en';
import { pt } from './pt';
import type { Locale, LocaleContent, RouteKey } from './types';

export const CONTENT: Record<Locale, LocaleContent> = { pt, en };

export function getContent(locale: Locale): LocaleContent {
  return CONTENT[locale];
}

export function getRoutePath(locale: Locale, routeKey: RouteKey): string {
  return CONTENT[locale].routes[routeKey].path;
}

export function getAlternates(routeKey: RouteKey): Array<{ href: string; hreflang: string }> {
  return [
    { hreflang: 'pt-BR', href: pt.routes[routeKey].path },
    { hreflang: 'en', href: en.routes[routeKey].path }
  ];
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === 'pt' ? 'en' : 'pt';
}

