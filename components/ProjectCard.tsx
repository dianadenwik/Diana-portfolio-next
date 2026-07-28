"use client";

import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  id,
  title,
  description,
  techStack,
  url,
  likes,
}: Project) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: async () => {
      await new Promise((r) => setTimeout(r, 5000));
    },

    onMutate: async (projectId: number) => {
      await queryClient.cancelQueries({ queryKey: ["projects"] });

      const previousProjects = queryClient.getQueryData<Project[]>([
        "projects",
      ]);

      queryClient.setQueryData<Project[]>(["projects"], (old) =>
        old?.map((p) =>
          p.id === projectId ? { ...p, likes: p.likes + 1 } : p,
        ),
      );

      return { previousProjects };
    },

    onError: (err, projectId, context) => {
      if (context?.previousProjects) {
        queryClient.setQueryData(["projects"], context.previousProjects);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return (
    <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/projects/${id}`}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:underline">
          {title}
        </h3>
      </Link>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        {url && url !== "" ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            View project →
          </a>
        ) : (
          <span />
        )}

        <button
          onClick={() => likeMutation.mutate(id)}
          aria-label="Like this project"
          className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          ❤️ {likes}
        </button>
      </div>
    </li>
  );
}
