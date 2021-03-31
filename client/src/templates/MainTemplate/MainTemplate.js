import React from "react";
import styles from "./MainTemplate.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.app}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
