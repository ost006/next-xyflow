'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type NodeTypes,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function CustomNode({ data }: { data: { label: string; description?: string } }) {
  return (
    <div className="px-4 py-2 shadow-lg rounded-lg bg-white border-2 border-blue-500">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />

      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">{data.label}</div>
        {data.description && (
          <div className="text-gray-500 text-sm">{data.description}</div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3"
      />
    </div>
  );
}

function ProcessNode({ data }: { data: { label: string } }) {
  return (
    <div className="px-6 py-3 shadow-lg rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />

      <div className="flex items-center gap-2">
        <span className="text-xl">⚙️</span>
        <div className="font-semibold">{data.label}</div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3"
      />
    </div>
  );
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  process: ProcessNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 50 },
    data: {
      label: 'Start Node',
      description: 'This is a custom node',
    },
  },
  {
    id: '2',
    type: 'process',
    position: { x: 100, y: 200 },
    data: { label: 'Process A' },
  },
  {
    id: '3',
    type: 'process',
    position: { x: 400, y: 200 },
    data: { label: 'Process B' },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 250, y: 350 },
    data: {
      label: 'End Node',
      description: 'Final destination',
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];

export default function CustomNodeFlow() {
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
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
