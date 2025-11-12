import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 max-w-2xl">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          React Flow Practice
        </h1>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          Next.js + TypeScript + React Flow diagram library practice project
        </p>

        <div className="flex flex-col gap-4 w-full mt-8">
          <Link
            href="/basic"
            className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Basic Flow Example</span>
          </Link>

          <Link
            href="/custom-nodes"
            className="flex items-center justify-center px-6 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Custom Nodes Example</span>
          </Link>

          <Link
            href="/interactive"
            className="flex items-center justify-center px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Interactive Example</span>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Project Information
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✅ Node.js 22 LTS</li>
            <li>✅ Next.js 16 (App Router)</li>
            <li>✅ TypeScript</li>
            <li>✅ React Flow 12.9.2</li>
            <li>✅ Tailwind CSS 4</li>
          </ul>
        </div>

        <a
          href="https://reactflow.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          React Flow Official Documentation →
        </a>
      </main>
    </div>
  );
}
