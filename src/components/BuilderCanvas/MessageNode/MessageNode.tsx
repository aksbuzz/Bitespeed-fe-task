import { MessageNodeData } from '@/store/builder';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { Handle, NodeProps, Position } from 'reactflow';

export function MessageNode({ data }: NodeProps<MessageNodeData>) {
  const { message } = data;

  return (
    <div>
      <Handle type="target" position={Position.Left} />
      <div className="w-52">
        <div className="flex items-center gap-1 py-0.5 px-2 rounded-tl rounded-tr bg-green-200 bg-gradient-to-rs">
          <ChatBubbleOvalLeftEllipsisIcon className="w-2 h-2" />
          <p className="text-[10px] font-semibold">Send Message</p>
        </div>
        {/* How much data should be visible in node? */}
        <p className="min-h-[31px] shadow-lg rounded-bl bg-white rounded-br p-2 text-[10px]">{message}</p>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
