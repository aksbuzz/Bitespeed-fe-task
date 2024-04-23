import { nanoid } from 'nanoid';
import { Connection, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import { StateCreator } from 'zustand';
import { SharedSlice } from './types';

export const createSharedSlice: StateCreator<SharedSlice> = (set, get) => ({
  nodes: [],
  edges: [],
  addNode(node) {
    const nodes = get().nodes;
    set({ nodes: [...nodes, { ...node, id: nanoid() }] });
  },
  onConnect(conn: Connection) {
    set({ edges: addEdge(conn, get().edges) });
  },
  onNodesChange(changes) {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },
  onEdgesChange(changes) {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },
});
