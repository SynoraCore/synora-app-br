import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import type { Locale, LocaleContent, RouteKey } from './types';

export const LOCALES: Locale[] = ['pt', 'es', 'en'];

export const CONTENT: Record<Locale, LocaleContent> = { pt, es, en };

export function isLocale(value: string | undefined): value is Locale {
  return value === 'pt' || value === 'es' || value === 'en';
}

export function getContent(locale: Locale): LocaleContent {
  return CONTENT[locale];
}

export function getRoutePath(locale: Locale, routeKey: RouteKey): string {
  return CONTENT[locale].routes[routeKey].path;
}

export function getAlternates(routeKey: RouteKey): Array<{ href: string; hreflang: string }> {
  return [
    { hreflang: 'pt-BR', href: pt.routes[routeKey].path },
    { hreflang: 'es', href: es.routes[routeKey].path },
    { hreflang: 'en', href: en.routes[routeKey].path },
    { hreflang: 'x-default', href: '/' }
  ];
}

