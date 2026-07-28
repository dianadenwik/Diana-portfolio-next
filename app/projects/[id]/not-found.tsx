import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-8xl font-bold text-brand mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Project not found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Sorry, we could not find the project you are looking for.
      </p>
      <Link
        href="/projects"
        className="bg-brand text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
