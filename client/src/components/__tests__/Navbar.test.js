import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const renderNavbar = (props) => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <Navbar {...props} />
    </Router>
  );
  return { ...utils };
};

describe("Navbar component", () => {
  it("displays logo", () => {
    const { getByAltText } = renderNavbar();
    const logoElement = getByAltText(/logo/i);

    expect(logoElement).toBeInTheDocument();
  });
  it("displays action button", () => {
    const { getByText } = renderNavbar();
    const actionButton = getByText(/Add article/i);

    expect(actionButton).toBeInTheDocument();
  });
  it("displays menu item", () => {
    const { getByText } = renderNavbar();
    const menuItem = getByText(/cs:go/i);

    expect(menuItem).toBeInTheDocument();
  });
});
