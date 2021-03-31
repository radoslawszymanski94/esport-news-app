import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer component", () => {
  it("renders footer text", () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/Esport news app/i);

    expect(footerElement).toBeInTheDocument();
  });
});
