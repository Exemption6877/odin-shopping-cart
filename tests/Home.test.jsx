import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home/Home";

describe("Home component testing", () => {
  it("Heading rendering", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("Home goes here");
  });
});
