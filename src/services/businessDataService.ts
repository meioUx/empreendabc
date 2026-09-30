import { businessConfig } from '../config/business';
import type { BusinessDashboard } from '../types/business';
import { parseBusinessData } from './businessRules';

let cached: { data: BusinessDashboard; expiresAt: number } | null = null;
let pending: Promise<BusinessDashboard> | null = null;
export async function loadBusinessData(): Promise<BusinessDashboard> {
  if (cached && cached.expiresAt > Date.now()) return cached.data;
  if (pending) return pending;
  pending = (async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(businessConfig.dataUrl, { signal: controller.signal, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`Falha ao carregar indicadores: ${response.status}`);
      const data = parseBusinessData(await response.json());
      cached = { data, expiresAt: Date.now() + businessConfig.cacheMs };
      return data;
    } finally { clearTimeout(timeout); }
  })();
  try { return await pending; } finally { pending = null; }
}
