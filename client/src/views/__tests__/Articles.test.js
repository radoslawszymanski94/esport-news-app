import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Articles from "../Articles/Articles";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const renderArticles = (props) => {
  const utils = render(
    <Provider store={store}>
      <Articles {...props} />
    </Provider>
  );
  return { ...utils };
};

describe("Articles view", () => {
  it("displays loading icon", () => {
    const { container } = renderArticles();
    const loadingImage = container.querySelector(".anticon-loading");

    expect(loadingImage).toBeInTheDocument();
  });
});
