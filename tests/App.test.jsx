import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/components/routes";

describe("App routing testing", () => {
  it("Renders default outlet content", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    const { asFragment } = render(<RouterProvider router={router} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders /shop outlet content", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    const { asFragment } = render(<RouterProvider router={router} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
