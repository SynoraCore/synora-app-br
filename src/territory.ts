export type Territory = 'br' | 'cl' | 'ar';

export function resolveTerritory(): Territory {
  const raw = (import.meta.env.SYNORA_TERRITORY || '').toLowerCase().trim();
  if (raw === 'cl' || raw === 'chile') return 'cl';
  if (raw === 'ar' || raw === 'argentina') return 'ar';
  return 'br';
}

export function resolvePublicationEditionForSpanishTerritory(): 'es-CL' | 'es-AR' {
  const territory = resolveTerritory();
  return territory === 'ar' ? 'es-AR' : 'es-CL';
}

export function territoryOrigins() {
  return {
    br: 'https://synora.app.br',
    cl: 'https://synora.cl',
    ar: 'https://synora.ar',
  } as const;
}

