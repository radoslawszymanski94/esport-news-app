import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../actions/articles";
import Article from "../Article/Article";
import styles from "./Articles.module.scss";
import { LoadingOutlined } from "@ant-design/icons";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      {articles.length > 0 ? (
        articles.map((article) =>
          article ? (
            <Article img={article.image} title={article.title} />
          ) : (
            <LoadingOutlined />
          )
        )
      ) : (
        <LoadingOutlined />
      )}
    </div>
  );
};

export default Articles;
