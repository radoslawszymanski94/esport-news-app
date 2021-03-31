import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import AddArticle from "../AddArticle/AddArticle";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const renderAddArticle = (props) => {
  const handleSubmit = jest.fn();
  const utils = render(
    <Provider store={store}>
      <AddArticle onSubmit={handleSubmit} {...props} />
    </Provider>
  );
  return { ...utils };
};

describe("AddArticle view", () => {
  it("displays image label", () => {
    const { getByText } = renderAddArticle();
    const imageLabel = getByText(/image/i);

    expect(imageLabel).toBeInTheDocument();
  });
  it("displays submit button", () => {
    const { getByText } = renderAddArticle();
    const submitBtn = getByText(/submit/i);

    expect(submitBtn).toBeInTheDocument();
  });
  it("displays error when inputs are not filled", async () => {
    const { container } = renderAddArticle();
    const submitBtn = container.querySelector('button[type="submit"]');
    const error = /required/i;

    expect(container).not.toHaveTextContent(error);

    await waitFor(() => fireEvent.click(submitBtn));

    expect(container).toHaveTextContent(error);
  });
});
