import { create } from 'zustand';
import { createMessageSlice } from './message-slice';
import { createSharedSlice } from './shared-slice';
import type { BuilderStore } from './types';

export const useBuilderStore = create<BuilderStore>()((...a) => ({
  // Shared slice containing nodes and edges and common methods
  ...createSharedSlice(...a),
  // Message slice containing methods for message node
  ...createMessageSlice(...a),
  // Other slices for other nodes will come here
}));
