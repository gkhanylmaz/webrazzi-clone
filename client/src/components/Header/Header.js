import logo from "../../image/logo.svg";
import styles from "./Head.module.scss";
import { FiSearch, FiBell, FiUser, FiMenu } from "react-icons/fi";
import Login from "components/Login/Login";
import { useState } from "react";

const Header = ({ user, setUser }) => {
  const openSide = () => {
    document.getElementById("mySidenav").style.width = "100vw";
  };
  const openSearch = () => {
    document.getElementById("SearchPage").style.width = "100vw";
    document.getElementById("SearchInsights").style.width = "40%";
  };
  const [loginCard, setloginCard] = useState(false);

  const CardLogin = () => {
    setloginCard(!loginCard);
  };

  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.Navbar}>
            <button className={styles.MenuIcons} onClick={openSide}>
              {" "}
              <FiMenu />
            </button>
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
            <div className={styles.Delimiter}></div>
            <ul className={styles.NavList}>
              <li className={styles.Dropdown}>
                <a href="/"> Kategoriler</a>{" "}
                <ul>
                  <li>
                    {" "}
                    <a href="/"> Kategori 1</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/"> Kategori 2</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/"> Kategori 3</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/"> Kategori 4</a>
                  </li>
                </ul>
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
              <FiSearch onClick={openSearch} className={styles.Icons} />{" "}
              <FiBell className={styles.Icons} />{" "}
              <FiUser className={styles.Icons} onClick={CardLogin} />
              {loginCard ? (
                <Login onClick={CardLogin} user={user} setUser={setUser} />
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
