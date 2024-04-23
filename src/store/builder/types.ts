import { Node, Edge, OnConnect, OnEdgesChange, OnNodesChange } from 'reactflow';

export type MessageNodeData = {
  message: string;
};

export type OtherNodeData = Record<string, never>;

export type SharedSlice = {
  nodes: Node<MessageNodeData | OtherNodeData>[];
  edges: Edge[];
  addNode: (node: Omit<Node, 'id'>) => void;
  onConnect: OnConnect;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
};

export type MessageSlice = {
  updateMessage: (nodeId: string, message: MessageNodeData['message']) => void;
};

export type BuilderStore = SharedSlice & MessageSlice;
