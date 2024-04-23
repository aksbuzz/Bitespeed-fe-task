import { Button } from '@/components/ui';
import { useAlertStore } from '@/store/alert';
import { useBuilderStore } from '@/store/builder';
import { useViewport } from 'reactflow';

export function BuilderHeader() {
  const { addAlert } = useAlertStore();
  const { edges, nodes } = useBuilderStore();
  const viewPort = useViewport();

  function handleSaveClick() {
    // Replace with actual save logic
    console.log({ nodes, edges, viewPort });
    
    let isValid = true;
    if (nodes.length > 1) {
      // get unique target nodes
      const nodesWithTarget = new Set(edges.map(e => e.target));
      const totalNodes = nodes.length;
      // check if there is a cycle
      if (totalNodes === nodesWithTarget.size) isValid = true;
      // check if there is a path
      // if there are n nodes, there there should be n - 1 nodes with a target
      else if (totalNodes - 1 !== nodesWithTarget.size) isValid = false;
    }

    if (!isValid) addAlert({ type: 'error', title: 'Cannot save flow' });
  }

  return (
    <div className="w-full py-2 bg-[#f3f3f3] flex">
      <div className="ml-auto mr-20">
        <Button onClick={handleSaveClick}>Save Changes</Button>
      </div>
    </div>
  );
}
