import logo from "../../image/logo.svg";
import styles from "./Header.module.scss";
import { FiSearch, FiBell, FiUser, FiMenu } from "react-icons/fi";

const Header = () => {
  const openSide = () => {
    document.getElementById("mySidenav").style.width = "100vw";
  };
  const openSearch = () => {
    document.getElementById("SearchPage").style.width = "100%";
    document.getElementById("SearchInsights").style.width = "40%";
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
              <FiSearch onClick={openSearch} className={styles.Icons} />{" "}
              <FiBell className={styles.Icons} />{" "}
              <FiUser className={styles.Icons} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
