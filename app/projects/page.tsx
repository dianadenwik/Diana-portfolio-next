"use client";

import { useQuery } from "@tanstack/react-query";
import Projects from "@/components/Projects";
import { getProjects } from "@/data/projects";

export default function ProjectsPage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isPending) {
    return <p className="py-12">Loading projects...</p>;
  }

  if (isError) {
    return <p className="py-12 text-red-500">Failed to load projects.</p>;
  }

  return <Projects projects={data} />;
}