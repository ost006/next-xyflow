# React Flow Practice Project Rules

## Code Style

- All code, comments, variable names, function names, class names, and strings MUST be in English only
- Add final newline to all files
- Use TypeScript strict mode
- Follow ESLint rules

## Project Structure

- `src/app/`: Next.js App Router pages
- `src/components/`: Reusable React Flow components
- React Flow components MUST use `'use client'` directive (client components)

## React Flow Rules

- React Flow component import: `@xyflow/react`
- Must import `@xyflow/react/dist/style.css`
- Node and Edge must specify TypeScript types
- State management using useState or useCallback
- Custom nodes should be separated into individual components

## Type Definitions

- Use React Flow types: Node, Edge, Connection, etc.
- Define custom node data with interfaces
- Explicitly type NodeTypes and EdgeTypes

## Component Naming

- Flow components: `*Flow.tsx` (e.g., BasicFlow.tsx)
- Custom nodes: `*Node.tsx` or defined as component functions
- Pages: `page.tsx`

## Styling

- Use Tailwind CSS
- Combine React Flow default styles + custom styles
- Support dark mode (dark: prefix)
