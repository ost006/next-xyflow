import CustomNodeFlow from '@/components/CustomNodeFlow';
import Link from 'next/link';

export default function CustomNodesPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
        <Link 
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
        >
          ← Home
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Custom Nodes Example
        </h1>
        <div className="w-20" />
      </header>
      
      <div className="flex-1">
        <CustomNodeFlow />
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Various styled nodes using custom node types
      </footer>
    </div>
  );
}
