import { useBuilderStore } from '@/store/builder';
import { NodesPanel } from './NodesPanel';
import { SettingsPanel } from './SettingsPanel';

type BuilderSidePanelProps = {
  selectedNodeId: string;
  onClearSelectedNode: () => void;
};

export function BuilderSidePanel({ selectedNodeId, onClearSelectedNode }: BuilderSidePanelProps) {
  const { nodes } = useBuilderStore();

  const selectedNode = nodes.find(node => node.id === selectedNodeId);

  return (
    <div className="w-[28rem] overflow-y-auto border-t-2 border-l-2">
      {!selectedNode && <NodesPanel />}
      {!!selectedNode && (
        <SettingsPanel node={selectedNode} onBackClick={onClearSelectedNode} />
      )}
    </div>
  );
}
