import { NodeType, NodeTypeCopy } from '@/constants/nodes';
import { MessageNodeData } from '@/store/builder';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { DragEvent } from 'react';

export function NodesPanel() {
  const nodeList = [
    { key: NodeType.MESSAGE, icon: ChatBubbleOvalLeftEllipsisIcon },
    // Add more nodes here
  ];

  function handleDragStart(e: DragEvent<HTMLDivElement>, key: NodeType) {
    const data: MessageNodeData = { message: '' };
    e.dataTransfer.setData('application/builder', JSON.stringify({ key, data }));
    e.dataTransfer.effectAllowed = 'move';
  }

  return (
    <div className="flex p-2 gap-1">
      {nodeList.map(({ key, icon: Icon }) => (
        <div
          key={key}
          className="flex flex-col gap-1 py-3 items-center w-1/2 border-blue-700 border rounded"
          onDragStart={e => handleDragStart(e, key)}
          draggable
        >
          <Icon className="w-6 h-6 text-blue-700" />
          <p className="text-blue-700 select-none">{NodeTypeCopy[key]}</p>
        </div>
      ))}
    </div>
  );
}
