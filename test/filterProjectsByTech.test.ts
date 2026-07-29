import { describe, it, expect } from "vitest";
import { filterProjectsByTech } from "@/utils/filterProjectsByTech";
import type { Project } from "@/data/projects";

const testProjects: Project[] = [
  { id: 1, title: "Portfolio", techStack: ["React", "TypeScript"] } as Project,
  {
    id: 2,
    title: "HackYourFuture Cookbook",
    techStack: ["React", "Vite"],
  } as Project,
  { id: 3, title: "Team Page", techStack: ["HTML", "CSS"] } as Project,
];

describe("filterProjectsByTech", () => {
  it("returns only projects that include the active tech", () => {
    const result = filterProjectsByTech(testProjects, "React");
    expect(result).toHaveLength(2);
    expect(result.map((p) => p.id)).toEqual([1, 2]);
  });

  it("returns all projects when filter is null", () => {
    const result = filterProjectsByTech(testProjects, null);
    expect(result).toHaveLength(3);
  });

  it("returns an empty array when no tech matches", () => {
    const result = filterProjectsByTech(testProjects, "Vue");
    expect(result).toHaveLength(0);
  });

  it("returns an empty array when given an empty list", () => {
    const result = filterProjectsByTech([], "React");
    expect(result).toHaveLength(0);
  });
});
