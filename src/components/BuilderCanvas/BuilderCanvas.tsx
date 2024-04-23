import { NodeType } from '@/constants/nodes';
import { useBuilderStore } from '@/store/builder/builder';
import { DragEvent, useCallback, useRef, useState } from 'react';
import ReactFlow, { Background, Connection, ReactFlowInstance } from 'reactflow';
import { MessageNode } from './MessageNode';

const nodeTypes = {
  [NodeType.MESSAGE]: MessageNode,
};

type BuilderCanvasProps = {
  onNodeSelect: (id: string) => void;
};

export function BuilderCanvas({ onNodeSelect }: BuilderCanvasProps) {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } = useBuilderStore();

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const data = e.dataTransfer.getData('application/builder');
      if (typeof data === 'undefined' || !data) return;

      const position = reactFlowInstance?.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!position) return;

      const parsedData = JSON.parse(data);
      addNode({ type: parsedData.key, position: position, data: parsedData.data });
    },
    [addNode, reactFlowInstance]
  );

  const isValidConnection = useCallback(
    (conn: Connection): boolean => {
      const sourceNodeId = conn.source;
      if (!sourceNodeId) return false;
      
      // Can have only 1 edge originating from source
      if (edges.find(edge => edge.source === sourceNodeId)) return false;

      return true;
    },
    [edges]
  );

  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        // fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node) => onNodeSelect(node.id)}
        onInit={setReactFlowInstance}
        isValidConnection={isValidConnection}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
