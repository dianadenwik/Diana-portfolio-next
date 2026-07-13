import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  return {
    title: project ? `${project.title} — Diana` : "Project not found",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {project.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {project.description}
      </p>

      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.url && project.url !== "" && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand font-medium text-sm hover:underline"
        >
          View project →
        </a>
      )}
    </div>
  );
}
