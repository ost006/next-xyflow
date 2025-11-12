# React Flow Practice Project

Practice project for Next.js + TypeScript + React Flow diagram library.

## Tech Stack

- **Node.js**: 22 LTS
- **Next.js**: 16.0.1 (App Router)
- **TypeScript**: 5.x
- **React Flow**: 12.9.2
- **Tailwind CSS**: 4.x

## Installation & Running

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

Development server runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file in the root directory by copying from `.env.example`:

```bash
cp .env.example .env
```

Available environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `NODE_ENV` | Node environment | `development` |
| `NEXT_PUBLIC_APP_URL` | Application base URL | `http://localhost:3000` |
| `NEXT_PUBLIC_API_URL` | API endpoint URL | `http://localhost:3000/api` |

### Changing the Port

To change the port, modify the `PORT` value in `.env` file:

```bash
# Example: Change to port 4000
PORT=4000
NEXT_PUBLIC_APP_URL=http://localhost:4000
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

**Important Notes:**
- When changing the `PORT`, make sure to update `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_API_URL` accordingly.
- The project uses `dotenv-cli` to load environment variables, so the PORT setting will work automatically.
- After changing the port in `.env`, restart the development server to apply changes.

## Project Structure

```
src/
├── app/
│   ├── basic/              # Basic flow example
│   ├── custom-nodes/       # Custom nodes example
│   ├── interactive/        # Interactive flow example
│   ├── layout.tsx
│   └── page.tsx           # Home page
└── components/
    ├── BasicFlow.tsx      # Basic flow component
    ├── CustomNodeFlow.tsx # Custom node flow component
    └── InteractiveFlow.tsx # Interactive flow component
```

## Example Pages

### 1. Basic Flow
- Basic React Flow implementation
- Node drag & drop
- Creating connections between nodes
- URL: `/basic`

### 2. Custom Nodes
- Custom node type definitions
- Various node styles
- Custom handle positions
- URL: `/custom-nodes`

### 3. Interactive Example
- Controls (zoom, fit view, etc.)
- MiniMap
- Background pattern
- Dynamic node add/remove
- URL: `/interactive`

## React Flow Key Features

- ✅ Drag and drop nodes
- ✅ Create connections between nodes
- ✅ Custom node types
- ✅ Animated edges
- ✅ Zoom & pan functionality
- ✅ MiniMap
- ✅ Background patterns
- ✅ Controls

## References

- [React Flow Official Documentation](https://reactflow.dev/learn)
- [React Flow API Reference](https://reactflow.dev/api-reference)
- [React Flow Examples](https://reactflow.dev/examples)

## License

MIT
