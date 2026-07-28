"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { filterProjectsByTech } from "@/utils/filterProjectsByTech";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allTags: string[] = [];
  for (const project of projects) {
    for (const tag of project.techStack) {
      if (!allTags.includes(tag)) allTags.push(tag);
    }
  }

  const filtered = filterProjectsByTech(projects, activeFilter);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-brand pl-4">
        Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveFilter(null)}
          className={
            activeFilter === null
              ? "bg-brand text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
          }
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={
              activeFilter === tag
                ? "bg-brand text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">
          No projects match this filter.
        </p>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}
