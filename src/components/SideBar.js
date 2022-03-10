import styles from "../Styled/SideBar.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../logo.svg";

const SideBar = () => {
  const closeSidebar = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div className={styles.SideBar} id="mySidenav">
      <div className={styles.container}>
        <div className={styles.SideHead}>
          <button onClick={closeSidebar}>
            <AiOutlineClose className={styles.Icons} />
          </button>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.SideBody}>
          <div className={styles.SideCategory}>
            <div className={styles.a}>
              <p href="/"> KATEGORİLER </p>
              <ul>
                <li>
                  {" "}
                  <a href="/"> Haberler </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Webrazzi Insights </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Videolar </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Galeriler </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Raporlar </a>
                </li>
              </ul>
            </div>
            <div className={styles.a}>
              <p> KONULAR </p>
              <ul>
                <li>
                  {" "}
                  <a href="/"> Dijital </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> E-Ticaret </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Girişim </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Mobil </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Teknoloji</a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Yatırım</a>
                </li>
              </ul>
            </div>
            <div className={styles.a}>
              <p> ETKİNLİKLER </p>
              <ul>
                <li>
                  {" "}
                  <a href="/"> Dijital </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> New HR Summit </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Summit </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Fintech </a>
                </li>
                <li>
                  {" "}
                  <a href="/"> Tüm Etkinlikler </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.Users}>
            <div className={styles.Card}>
              <p>
                {" "}
                Gündemi yakalayın, etkinlikleri takip edin, özel içeriklere
                ulaşın!{" "}
              </p>

              <div className={styles.LoginBtn}>
                <button className={`${styles.YellowBtn} ${styles.Btn}`}>
                  {" "}
                  Giriş Yap{" "}
                </button>
                <button className={`${styles.LightBtn} ${styles.Btn}`}>
                  {" "}
                  Kayıt Ol{" "}
                </button>
              </div>
            </div>
            <div className={styles.Card}>
              <img
                src="https://webrazzi.com/v8/img/wbrands/insights.svg"
                alt="insight"
              />
              <p>
                {" "}
                Webrazzi Insights kapsamlı içerikleri ve raporlarıyla içgörü
                yaratıyor, stratejilere yöç veriyor.
              </p>
            </div>
            <div className={styles.Card}>
              <img
                src="https://webrazzi.com/v8/img/wbrands/reports.svg"
                alt="raporlar"
              />
              <p>
                Webrazzi Raporlar kapsamlı içerikleri ve derinlemesine araştırma
                raporlarıyla öne çıkıyor.{" "}
              </p>
            </div>
            <div className={styles.Card}>
              <img
                src="https://webrazzi.com/v8/img/wbrands/events.svg"
                alt="activity"
              />
            </div>
            <div className={styles.Card}>
              <img
                src="https://webrazzi.com/v8/img/wbrands/jobs.svg"
                alt="job"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
