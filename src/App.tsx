import { Alerts } from '@/components/ui';
import Builder from '@/pages/Builder';
import { ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';

function App() {
  return (
    <ReactFlowProvider>
      <Builder />
      <Alerts />
    </ReactFlowProvider>
  );
}

export default App;
