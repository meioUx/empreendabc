import type { BusinessHistory } from '../../types/business';
import { BusinessHistoryChart } from './BusinessHistoryChart';
export function BusinessMovementChart({ history }: { history: BusinessHistory[] }) {
  return <BusinessHistoryChart history={history} movement />;
}
