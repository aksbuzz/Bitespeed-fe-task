import { BuilderCanvas, BuilderHeader, BuilderSidePanel } from '@/components';
import { useCallback, useState } from 'react';

export default function Builder() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');

  const handleNodeSelect = useCallback((id: string) => {
    setSelectedNodeId(id);
  }, []);

  const handleClearSelectedNode = useCallback(() => {
    setSelectedNodeId('');
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden theme">
      <BuilderHeader />

      <div className="flex flex-1 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <BuilderCanvas onNodeSelect={handleNodeSelect} />
        </div>

        <BuilderSidePanel
          selectedNodeId={selectedNodeId}
          onClearSelectedNode={handleClearSelectedNode}
        />
      </div>
    </div>
  );
}
