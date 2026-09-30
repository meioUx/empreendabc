import type { Cnpj } from '../types/business';

export function normalizeCnpj(value: Cnpj): Cnpj {
  return value.trim().toUpperCase().replace(/[.\/\-]/g, '');
}

// Módulo 11, valores ASCII - 48, conforme manual da Receita Federal.
export function isValidCnpj(value: Cnpj): boolean {
  const cnpj = normalizeCnpj(value);
  if (!/^[A-Z0-9]{12}[0-9]{2}$/.test(cnpj) || /^(.)\1{13}$/.test(cnpj)) return false;
  const digit = (base: string): string => {
    let weight = 2;
    let sum = 0;
    for (let index = base.length - 1; index >= 0; index -= 1) {
      sum += (base.charCodeAt(index) - 48) * weight;
      weight = weight === 9 ? 2 : weight + 1;
    }
    const remainder = sum % 11;
    return String(remainder < 2 ? 0 : 11 - remainder);
  };
  const first = digit(cnpj.slice(0, 12));
  return cnpj.slice(-2) === first + digit(cnpj.slice(0, 12) + first);
}
