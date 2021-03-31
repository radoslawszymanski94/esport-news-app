import axios from "axios";
import { message } from "antd";

// Base URL
const url = "https://esport-news-app.herokuapp.com/api/articles";

// Fetch all articles
export const fetchArticles = () => axios.get(url);

// Create article
export const createArticle = (newArticle) =>
  axios
    .post(`${url}/create`, newArticle)
    .then(() => message.success("Article created successfully!"))
    .catch(() => message.error("Article is not created..."));
