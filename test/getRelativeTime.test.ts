import { describe, it, expect } from "vitest";
import { getRelativeTime } from "@/utils/getRelativeTime";

describe("getRelativeTime", () => {
  it("returns 'just now' for a difference under a minute", () => {
    const now = new Date("2026-01-15T12:00:00");
    const date = new Date("2026-01-15T11:59:30");
    expect(getRelativeTime(date, now)).toBe("just now");
  });

  it("returns minutes for a difference under an hour", () => {
    const now = new Date("2026-01-15T12:00:00");
    const date = new Date("2026-01-15T11:45:00");
    expect(getRelativeTime(date, now)).toBe("15 minutes ago");
  });

  it("uses singular form for exactly 1 minute", () => {
    const now = new Date("2026-01-15T12:00:00");
    const date = new Date("2026-01-15T11:59:00");
    expect(getRelativeTime(date, now)).toBe("1 minute ago");
  });
});
