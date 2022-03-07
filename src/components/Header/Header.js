import React from "react";
import logo from "logo.svg";
import styles from "./Header.module.scss";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.Navbar}>
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
            <div className={styles.Delimiter}></div>
            <ul className={styles.NavList}>
              <li>
                <a href="/"> Kategoriler</a>{" "}
              </li>
              <li>
                <a href="/"> Konular</a>
              </li>
              <li>
                <a href="/"> Etkinlik</a>{" "}
              </li>
              <li>
                <a href="/"> Kariyer</a>{" "}
              </li>
            </ul>
            <div className={styles.NavIcons}>
              <a href="/">
                {" "}
                <FiSearch />
              </a>
              <a href="/">
                {" "}
                <FiBell />
              </a>
              <a href="/">
                {" "}
                <FiUser />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
