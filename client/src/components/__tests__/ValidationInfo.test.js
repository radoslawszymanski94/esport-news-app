import React from "react";
import { render } from "@testing-library/react";
import ValidationInfo from "../ValidationInfo/ValidationInfo";

describe("ValidationInfo component", () => {
  it("renders validation text", () => {
    const { getByText } = render(<ValidationInfo children="Required" />);
    const validation = getByText(/required/i);

    expect(validation).toBeInTheDocument();
  });
});
