import { describe, it, expect } from "vitest";
import { getProjectById } from "@/data/projects";

describe("getProjectById", () => {
  it("returns the correct project for an existing id", async () => {
    const result = await getProjectById(4);
    expect(result?.id).toBe(4);
    expect(result?.title).toBe("24 Borders");
  });

  it("returns undefined for a non-existent id", async () => {
    const result = await getProjectById(999);
    expect(result).toBeUndefined();
  });

  it("returns undefined for id 0 (boundary)", async () => {
    const result = await getProjectById(0);
    expect(result).toBeUndefined();
  });
});
