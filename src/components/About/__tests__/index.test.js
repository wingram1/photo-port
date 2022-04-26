import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// after each test, we won't have any leftover memory data
afterEach(cleanup);

describe("About component", () => {
  // First test
  it("renders", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
