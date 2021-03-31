import { fireEvent, render, waitFor } from "@testing-library/react";
import Article from "../Article/Article";
import photo from "../../utils/images/csgo.png";

const renderArticle = (props) => {
  const utils = render(<Article img={photo} title="Title" {...props} />);
  return { ...utils };
};

describe("Article component", () => {
  it("displays image", () => {
    const { getByAltText } = renderArticle();
    const image = getByAltText(/cover/i);

    expect(image).toBeInTheDocument();
  });
  it("displays title", () => {
    const { getByText } = renderArticle();
    const title = getByText(/title/i);

    expect(title).toBeInTheDocument();
  });
  it("displays action buttons", () => {
    const { getByTitle } = renderArticle();
    const likeButton = getByTitle("like");
    const dislikeButton = getByTitle("dislike");

    expect(likeButton).toBeInTheDocument();
    expect(dislikeButton).toBeInTheDocument();
  });
  it("displays proper like count number", () => {
    const { getByTitle } = renderArticle();
    const likeButton = getByTitle("like");
    const dislikeButton = getByTitle("dislike");

    fireEvent.click(likeButton);
    const likeCount = getByTitle("1");

    expect(likeCount).toBeInTheDocument();

    fireEvent.click(dislikeButton);

    expect(likeCount).not.toBeInTheDocument();
  });
});
