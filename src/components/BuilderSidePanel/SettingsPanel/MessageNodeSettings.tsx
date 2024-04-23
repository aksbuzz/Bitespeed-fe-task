import { TextareaField } from '@/components/ui';
import { MessageNodeData, useBuilderStore } from '@/store/builder';

type MessageNodeSettingsProps = {
  id: string;
  data: MessageNodeData;
};

export function MessageNodeSettings({ id, data }: MessageNodeSettingsProps) {
  const { updateMessage } = useBuilderStore();

  return (
    <TextareaField
      id={id}
      value={data.message}
      onChange={e => updateMessage(id, e.target.value)}
      label="Text"
    />
  );
}
