import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import Contact from "@/components/Contact";

vi.mock("@/app/contact/actions", () => ({
  sendMessage: vi.fn(),
}));

describe("Contact accessibility", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
