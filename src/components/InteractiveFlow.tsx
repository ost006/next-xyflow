'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Input Node' },
    style: { background: '#6EE7B7', color: '#065F46' },
  },
  {
    id: '2',
    position: { x: 0, y: 150 },
    data: { label: 'Processing Node' },
    style: { background: '#93C5FD', color: '#1E40AF' },
  },
  {
    id: '3',
    position: { x: 200, y: 75 },
    data: { label: 'Output Node' },
    style: { background: '#FCA5A5', color: '#991B1B' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#6EE7B7' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    style: { stroke: '#93C5FD' },
  },
];

export default function InteractiveFlow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect: OnConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        ...params,
        animated: true,
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [],
  );

  const addNode = () => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
      data: { label: `Node ${nodes.length + 1}` },
      style: {
        background: `hsl(${Math.random() * 360}, 70%, 70%)`,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const clearFlow = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  };

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>

      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button
          onClick={addNode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-colors"
        >
          Add Node
        </button>
        <button
          onClick={clearFlow}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-lg transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-10 max-w-xs">
        <h3 className="font-bold mb-2">Interactive Controls</h3>
        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
          <li>• Nodes: {nodes.length}</li>
          <li>• Edges: {edges.length}</li>
          <li>• Click Add Node to add nodes</li>
          <li>• Click Reset to restore initial state</li>
        </ul>
      </div>
    </div>
  );
}
