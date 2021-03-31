import React from "react";
import styles from "./ValidationInfo.module.scss";

const ValidationInfo = ({ children }) => {
  return <div className={styles.validationInfo}>{children}</div>;
};

export default ValidationInfo;
