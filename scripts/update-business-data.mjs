import { readFile, writeFile, mkdir, rename, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { rules } from './lib/business-rules.mjs';

export function mergeSnapshots(previous, incoming) {
  const old = rules.parseBusinessData(previous);
  const next = rules.parseBusinessData(incoming);
  if (next.metadata.competencia <= old.metadata.competencia) throw new Error('Use uma competência posterior; snapshots publicados são preservados.');
  const history = new Map(old.history.map(row => [row.mes, row]));
  for (const row of next.history) {
    const existing = history.get(row.mes);
    if (existing && ['ativos', 'aberturas', 'baixas'].some(key => existing[key] !== row[key])) throw new Error(`Tentativa de alterar histórico de ${row.mes}.`);
    history.set(row.mes, row);
  }
  if (next.overview && !history.has(next.overview.competencia)) {
    history.set(next.overview.competencia, { mes: next.overview.competencia, ativos: next.overview.estabelecimentosAtivos, aberturas: next.overview.aberturasMes, baixas: next.overview.baixasMes });
  }
  return rules.parseBusinessData({ ...next, history: [...history.values()] });
}

async function main() {
  const input = process.argv[2];
  if (!input || input.startsWith('--')) throw new Error('Uso: node scripts/update-business-data.mjs caminho/agregado.json [--dry-run]');
  const directory = resolve('public/data/business');
  const previous = JSON.parse(await readFile(join(directory, 'current.json'), 'utf8'));
  const incoming = JSON.parse(await readFile(resolve(input), 'utf8'));
  const data = mergeSnapshots(previous, incoming);
  if (process.argv.includes('--dry-run')) { console.log(`Válido: ${data.metadata.competencia}; ${data.history.length} meses preservados. Nenhum arquivo alterado.`); return; }
  await mkdir(join(directory, 'snapshots'), { recursive: true });
  const payload = JSON.stringify(data, null, 2) + '\n';
  const snapshot = join(directory, 'snapshots', `${data.metadata.competencia}.json`);
  // wx impede sobrescrita do arquivo histórico. Publicação administrativa: um job por vez.
  await writeFile(snapshot, payload, { flag: 'wx' });
  const temporary = join(directory, `.current-${process.pid}.tmp`);
  try { await writeFile(temporary, payload, { flag: 'wx' }); await rename(temporary, join(directory, 'current.json')); }
  catch (error) { await rm(temporary, { force: true }); await rm(snapshot); throw error; }
  console.log(`Publicado ${data.metadata.competencia}; histórico preservado.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
