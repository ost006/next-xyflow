# React Flow Best Practices & Patterns

## Basic Pattern

### 1. Flow Component Structure

```typescript
'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function MyFlow() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    />
  );
}
```

### 2. Custom Node Pattern

```typescript
import { Handle, Position, NodeProps } from '@xyflow/react';

function CustomNode({ data }: NodeProps) {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};
```

### 3. Interactive Features

- Controls: Zoom, fit view buttons
- MiniMap: Display minimap
- Background: Background pattern
- Panel: Custom UI panel

## Important Notes

- React Flow only works in client components
- Parent element requires explicit width/height
- Maintain immutability for node/edge state
- Optimize handlers with useCallback
