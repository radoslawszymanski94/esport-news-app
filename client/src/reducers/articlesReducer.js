import { CREATE, FETCH_ALL } from "../constans/actionTypes";

const articlesReducer = (articles = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return [...action.payload.articles];
    case CREATE:
      return [...articles, action.payload];
    default:
      return articles;
  }
};

export default articlesReducer;
