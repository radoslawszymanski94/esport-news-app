import { CREATE, FETCH_ALL } from "../constans/actionTypes";
import * as api from "../api";

// Action creators
export const getArticles = () => async (dispatch) => {
  try {
    const allArticles = await api.fetchArticles();
    dispatch({
      type: FETCH_ALL,
      payload: {
        articles: allArticles.data,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    const { data } = await api.createArticle(article);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
