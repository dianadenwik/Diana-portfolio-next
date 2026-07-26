import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";

vi.mock("@/app/contact/actions", () => ({
  sendMessage: vi.fn(),
}));

describe("Contact", () => {
  it("renders the form fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" }),
    ).toBeInTheDocument();
  });

  it("lets the user type into the fields", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Name *"), "Diana");
    await user.type(screen.getByLabelText("Email *"), "diana@example.com");

    expect(screen.getByLabelText("Name *")).toHaveValue("Diana");
    expect(screen.getByLabelText("Email *")).toHaveValue("diana@example.com");
  });
});
