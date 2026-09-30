import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { rules, loadTypescriptModule } from '../scripts/lib/business-rules.mjs';
import { mergeSnapshots } from '../scripts/update-business-data.mjs';
const cnpj = await loadTypescriptModule('../../src/utils/cnpj.ts');
const seed = JSON.parse(await readFile(new URL('../public/data/business/current.json', import.meta.url), 'utf8'));
const clone = () => structuredClone(seed);

test('base mantém valores, competências distintas e saldo fornecidos', () => {
  const data = rules.parseBusinessData(seed);
  assert.equal(data.overview.estabelecimentosAtivos, 47228);
  assert.equal(data.overview.matrizesAtivas, 45006);
  assert.equal(data.overview.meisAtivos, 19434);
  assert.equal(rules.balance(data.overview.aberturasMes, data.overview.baixasMes), 569);
  assert.equal(data.neighborhoods.competencia, '2026-08');
  assert.equal(data.metadata.competencia, '2026-09');
  assert.equal(data.history.length, 14);
});
test('locale e ausência não são confundidos com zero', () => {
  assert.equal(rules.formatNumber(47228), '47.228');
  assert.equal(rules.formatPercent(41.1), '41,1%');
  assert.equal(rules.formatBalance(569), '+569');
  assert.equal(rules.formatBalance(-20), '-20');
  assert.equal(rules.formatNumber(null), '—');
  assert.equal(rules.formatNumber(0), '0');
  assert.equal(rules.balance(null, 12), null);
  assert.equal(rules.formatMonth('2026-09'), 'setembro/2026');
  assert.equal(rules.formatMonth('2025-08', true), 'ago/25');
});
test('API parcial usa null, e resposta incompleta ou inválida gera erro', () => {
  const data = clone(); data.overview.meisAtivos = null;
  assert.equal(rules.parseBusinessData(data).overview.meisAtivos, null);
  for (const invalid of [{}, null, { ...seed, history: 'bad' }]) assert.throws(() => rules.parseBusinessData(invalid));
  const wrong = clone(); delete wrong.overview.meisAtivos;
  assert.throws(() => rules.parseBusinessData(wrong));
});
test('contrato vazio válido mantém a ausência de dados', () => {
  const data = clone(); data.overview = null; data.history = []; data.sectors.items = []; data.neighborhoods.items = [];
  assert.equal(rules.parseBusinessData(data).overview, null);
});
test('rejeita dados negativos, datas repetidas e divergência do resumo', () => {
  const negative = clone(); negative.history[0].ativos = -1; assert.throws(() => rules.parseBusinessData(negative));
  const duplicate = clone(); duplicate.history.push(duplicate.history[0]); assert.throws(() => rules.parseBusinessData(duplicate));
  const month = clone(); month.neighborhoods.competencia = '2026-13'; assert.throws(() => rules.parseBusinessData(month));
  const mismatch = clone(); mismatch.overview.aberturasMes = 100; assert.throws(() => rules.parseBusinessData(mismatch));
});
test('ordena rankings e histórico sem modificar a entrada', () => {
  const data = clone(); data.sectors.items.reverse(); data.history.reverse();
  const result = rules.parseBusinessData(data);
  assert.equal(result.sectors.items[0].quantidade, 2304);
  assert.equal(result.history[0].mes, '2025-08');
  assert.equal(data.history[0].mes, '2026-09');
});
test('bairros normalizados preservam acentos', () => {
  assert.equal(rules.normalizeNeighborhood('  Nações   '), 'NAÇÕES');
  assert.equal(rules.normalizeNeighborhood('  VILA   REAL '), 'VILA REAL');
});
test('CNPJ oficial alfanumérico e legado, sem perda de zeros', () => {
  assert.equal(cnpj.isValidCnpj('12.ABC.345/01DE-35'), true);
  assert.equal(cnpj.isValidCnpj('12abc34501de35'), true);
  assert.equal(cnpj.isValidCnpj('04.252.011/0001-10'), true);
  assert.equal(cnpj.normalizeCnpj('04.252.011/0001-10'), '04252011000110');
  for (const value of ['12ABC34501DE36', '00000000000000', '12ABC34501DEAA', '12ABC34501DÉ35']) assert.equal(cnpj.isValidCnpj(value), false);
});
test('importação mensal preserva meses anteriores e acrescenta o novo', () => {
  const next = clone(); next.metadata.competencia = '2026-10'; next.overview.competencia = '2026-10'; next.history = [];
  const merged = mergeSnapshots(seed, next);
  assert.equal(merged.history.length, 15);
  assert.deepEqual(merged.history.slice(0,14), seed.history);
  assert.equal(merged.history[14].mes, '2026-10');
});
test('importação impede reescrever o mês atual ou histórico anterior', () => {
  assert.throws(() => mergeSnapshots(seed, clone()), /posterior/);
  const next = clone(); next.metadata.competencia = '2026-10'; next.overview.competencia = '2026-10'; next.history[0].ativos += 1;
  assert.throws(() => mergeSnapshots(seed, next), /alterar histórico/);
});
