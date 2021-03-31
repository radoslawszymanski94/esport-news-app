import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../utils/images/Logo_GGPlayz_white_transparent.png";

const Navbar = () => {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            <span className={styles.navLink}>CS:GO</span>
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink className="button is-warning" to="/article/add">
                <strong>Add article</strong>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
