import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop/Shop";

describe("Shop component testing", () => {
  it("Heading rendering", () => {
    render(<Shop />);
    expect(screen.getByRole("heading")).toHaveTextContent("Shop goes here");
  });
});
