import { Alert as TAlert } from '@/store/alert';
import { useEffect } from 'react';

type AlertProps = {
  alert: TAlert;
  onDismiss: (id: string) => void;
};

export function Alert(props: AlertProps) {
  const { alert, onDismiss } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      onDismiss(alert.id);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [alert.id, onDismiss]);

  return (
    <div
      className={`font-regular relative block min-w-72 max-w-96 rounded-lg ${
        {
          success: 'bg-green-300',
          error: 'bg-red-300',
          warning: 'bg-yellow-300',
          info: 'bg-blue-300',
        }[alert.type]
      } p-4 text-base leading-5 text-white opacity-100`}
    >
      <div className="mr-12 text-black font-semibold">{alert.title}</div>
    </div>
  );
}
