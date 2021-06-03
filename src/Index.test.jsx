import React from "react";
import { configure, render, screen } from "@testing-library/react";

import "./__mocks__/matchMedia";
import App from "./App/App";

configure({ testIdAttribute: "data-v2" });

describe("application tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should render name", () => {
    const element = screen.getByTestId("name");
    expect(element).toHaveTextContent(/Jaya Kumar Ganesan/i);
  });

  test("should render title", () => {
    const element = screen.getByTestId("title");
    expect(element).toHaveTextContent(/Software Engineer/i);
  });

  test("should render creator", () => {
    const element = screen.getByTestId("creator");
    expect(element).toHaveTextContent(/Jaya Kumar Ganesan/i);
  });

  test("should render link to source code", () => {
    const element = screen.getByTestId("source");
    expect(element).toHaveAttribute(
      "href",
      "https://github.com/gjayakumar92/portfolio"
    );
  });

  const buttons = {
    GitHub: "https://github.com/gjayakumar92/",
    LinkedIn: "https://www.linkedin.com/in/jaya-kumar-ganesan/",
    Resume:
      "https://drive.google.com/drive/folders/1yGFprKkYInD6zLnOYfGR_oKsYwzXCFPY?usp=sharing",
    Email: "mailto:gjayakumar92@gmail.com",
  };

  test("should render buttons with links", () => {
    Object.entries(buttons).forEach(([k, v]) => {
      const element = screen.getByTestId(`${k}`);
      expect(element).toHaveTextContent(k);

      const parent = element.parentElement;
      expect(parent).toHaveAttribute("href", v);
    });
  });
});
