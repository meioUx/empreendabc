import { Building2, UsersRound, Plus, TrendingUp } from 'lucide-react';
import type { BusinessOverview as Overview } from '../../types/business';
import { balance, formatBalance, formatNumber, formatPercent } from '../../services/businessRules';
import { BusinessKpiCard } from './BusinessKpiCard';
export function BusinessOverview({ data }: { data: Overview | null }) {
  if (!data) return <p className="card">Dados ainda não disponíveis para esta competência.</p>;
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <BusinessKpiCard title="Empresas ativas" value={formatNumber(data.estabelecimentosAtivos)} description="Estabelecimentos com CNPJ ativo no município." detail={`${formatNumber(data.matrizesAtivas)} matrizes`} competence={data.competencia} icon={Building2} highlight />
    <BusinessKpiCard title="MEIs" value={formatNumber(data.meisAtivos)} description="Microempreendedores Individuais ativos." detail={`${formatPercent(data.percentualMei)} dos estabelecimentos ativos`} competence={data.competencia} icon={UsersRound} />
    <BusinessKpiCard title="Novas empresas" value={formatNumber(data.aberturasMes)} description="Aberturas registradas no mês." competence={data.competencia} icon={Plus} />
    <BusinessKpiCard title="Saldo empresarial" value={formatBalance(balance(data.aberturasMes, data.baixasMes))} description="Diferença entre aberturas e baixas no mês." detail={`${formatNumber(data.aberturasMes)} aberturas · ${formatNumber(data.baixasMes)} baixas`} competence={data.competencia} icon={TrendingUp} />
  </div>;
}
