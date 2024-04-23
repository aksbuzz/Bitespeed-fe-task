import { nanoid } from 'nanoid';
import { create } from 'zustand';

export type Alert = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};

type AlertsStore = {
  alerts: Alert[];
  addAlert: (Alert: Omit<Alert, 'id'>) => void;
  dismissAlert: (id: string) => void;
};

export const useAlertStore = create<AlertsStore>(set => ({
  alerts: [],
  addAlert: alert =>
    set(state => ({
      alerts: [...state.alerts, { id: nanoid(), ...alert }],
    })),
  dismissAlert: id =>
    set(state => ({
      alerts: state.alerts.filter(alert => alert.id !== id),
    })),
}));
