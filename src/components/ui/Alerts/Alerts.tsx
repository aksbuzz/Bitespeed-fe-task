import { useAlertStore } from '@/store/alert';
import { Alert } from './Alert';

export function Alerts() {
  const { alerts, dismissAlert } = useAlertStore();

  return (
    <div className="z-[999] flex flex-col fixed inset-0 space-y-4 px-4 pointer-events-none items-center sm:p-1">
      {alerts.map(alert => (
        <Alert key={alert.id} alert={alert} onDismiss={dismissAlert} />
      ))}
    </div>
  );
}
