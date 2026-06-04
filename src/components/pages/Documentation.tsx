/**
 * @file Documentation.tsx
 * @description Component for displaying the JSDoc documentation within the app
 */

import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">E-commerce Documentation</h1>
          <Link
            to="/"
            className="rounded-lg bg-white/20 px-4 py-2 hover:bg-white/30"
          >
            Back to App
          </Link>
        </div>
      </header>

      {/* Documentation Content */}
      <main className="flex-1">
        <iframe
          src="/src/docs/index.html"
          className="h-[calc(100vh-4rem)] w-full border-0"
          title="Documentation"
        />
      </main>
    </div>
  );
};

export default Documentation;
