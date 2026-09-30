import { readFile } from 'node:fs/promises';
import ts from 'typescript';
// Reutiliza exatamente as regras TypeScript do frontend nas rotinas administrativas.
export async function loadTypescriptModule(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}
export const rules = await loadTypescriptModule('../../src/services/businessRules.ts');
