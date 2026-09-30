import type { BusinessHistory } from '../../types/business';
import { BusinessHistoryChart } from './BusinessHistoryChart';
export function BusinessEvolutionChart({ history }: { history: BusinessHistory[] }) {
  return <BusinessHistoryChart history={history} />;
}
