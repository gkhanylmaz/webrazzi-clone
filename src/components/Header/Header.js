import logo from "logo.svg";
import styles from "./Header.module.scss";
import { FiSearch, FiBell, FiUser, FiMenu } from "react-icons/fi";

const Header = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100vw";
  };
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.Navbar}>
            <button className={styles.MenuIcons} onClick={openNav}>
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
