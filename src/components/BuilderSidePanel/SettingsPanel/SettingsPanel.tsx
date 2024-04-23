import { NodeType, NodeTypeCopy } from '@/constants/nodes';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Node } from 'reactflow';
import { MessageNodeSettings } from './MessageNodeSettings';

type SettingsPanelProps = { node: Node; onBackClick: () => void };

export function SettingsPanel({ node, onBackClick }: SettingsPanelProps) {
  const { id, type, data } = node;

  const setting = {
    [NodeType.MESSAGE]: <MessageNodeSettings id={id} data={data} />,
    // Add more settings here
  }[type as NodeType];

  return (
    <>
      <div className="flex justify-center items-center relative border-b-2 py-2">
        <ArrowLeftIcon onClick={onBackClick} className="cursor-pointer h-4 w-4 absolute left-2" />
        <p className="text-sm">{NodeTypeCopy[type as NodeType]}</p>
      </div>
      <div className="border-b-2 px-2 py-4">{setting}</div>
    </>
  );
}
