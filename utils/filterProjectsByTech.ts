import type { Project } from "@/data/projects";

export function filterProjectsByTech(
  projects: Project[],
  activeFilter: string | null,
): Project[] {
  return projects.filter(
    (p) => activeFilter === null || p.techStack.includes(activeFilter),
  );
}
