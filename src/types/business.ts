// Identificadores nunca são convertidos para number/bigint.
export type Cnpj = string;
export type BusinessValue = number | null;
export interface BusinessOverview {
  competencia: string; municipio: string; uf: string;
  estabelecimentosAtivos: BusinessValue; matrizesAtivas: BusinessValue;
  meisAtivos: BusinessValue; percentualMei: BusinessValue;
  aberturasMes: BusinessValue; baixasMes: BusinessValue;
}
export interface BusinessSector { codigoCnae?: string; nome: string; quantidade: BusinessValue }
export interface BusinessNeighborhood { nome: string; quantidade: BusinessValue }
export interface BusinessHistory { mes: string; ativos: BusinessValue; aberturas: BusinessValue; baixas: BusinessValue }
export interface BusinessDataMetadata {
  fonte: string; urlFonte: string; competencia: string; atualizadoEm?: string;
  origem: 'seed' | 'receita-federal'; nota?: string;
}
export interface BusinessDashboard {
  metadata: BusinessDataMetadata;
  overview: BusinessOverview | null;
  history: BusinessHistory[];
  sectors: { competencia: string; items: BusinessSector[] };
  neighborhoods: { competencia: string; completa: boolean; items: BusinessNeighborhood[] };
}
