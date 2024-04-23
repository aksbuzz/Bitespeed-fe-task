import { Node } from 'reactflow';
import { StateCreator } from 'zustand';
import { MessageNodeData, MessageSlice, SharedSlice } from './types';

// Slice for message node
export const createMessageSlice: StateCreator<SharedSlice & MessageSlice, [], [], MessageSlice> = (
  set,
  get
) => ({
  // For now, only text of message node can be updated.
  // If we want to add more fields in future, we can add them here
  updateMessage(nodeId: string, message: MessageNodeData['message']) {
    set({
      nodes: get().nodes.map((node: Node) => {
        if (node.id === nodeId) return { ...node, data: { ...node.data, message } };
        return node;
      }),
    });
  },
});
