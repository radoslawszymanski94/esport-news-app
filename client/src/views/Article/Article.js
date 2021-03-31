import React, { useState } from "react";
import styles from "./Article.module.scss";
import { Card, Badge } from "antd";
import { LikeFilled, DislikeFilled } from "@ant-design/icons";

const { Meta } = Card;

const Article = ({ img, title }) => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <Card
      className={styles.card}
      cover={<img alt="Cover" src={img} />}
      actions={[
        <LikeFilled
          onClick={() => setLikeCount(likeCount + 1)}
          className={styles.actionIcon}
          key="like"
          title="like"
        />,
        <Badge count={likeCount} />,
        <DislikeFilled
          onClick={() => setLikeCount(likeCount - 1)}
          className={styles.actionIcon}
          key="dislike"
          title="dislike"
        />,
      ]}
    >
      <Meta description={title} style={{ textAlign: "center" }} />
    </Card>
  );
};

export default Article;
