import React from "react";
import styles from "./Footer.module.scss";
import cx from "classnames";

const Footer = () => {
  return (
    <footer className={cx(styles.wrapper)}>
      <div className="content has-text-centered">
        <p className={styles.footerText}>
          <strong>Esport news app</strong> by Radosław Szymański
        </p>
      </div>
    </footer>
  );
};

export default Footer;
