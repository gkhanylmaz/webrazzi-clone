import styles from "./LoginPage.module.scss";
import logo from "../../src/image/logo.svg";
function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <div className={styles.LoginHome}>
          <div className={styles.LoginLeft}>
            <img
              className={styles.BgImg}
              src="https://webrazzi.com/v8/img/bg_auth.svg"
              alt="bg"
            />
            <a href="/">
              <img src={logo} alt="wb-logo" />{" "}
            </a>
            <div className={styles.LeftTitle}>
              <p>
                {" "}
                <span> </span> INSİGHTS
              </p>
              <p>
                {" "}
                <span> </span> GİRİŞİM{" "}
              </p>

              <h3>
                Otomotiv sektöründe satın almalar sürerken farklı iş modelleri
                de öne çıkıyor{" "}
              </h3>
            </div>
          </div>
          <div className={styles.LoginRight}>
            <div className={styles.RightTitle}>
              <h1> Webrazzi dünyasına adım atın</h1>
              <p>
                Giriş yaparak etkinlik ve kampanyalarda üyelik avantajlarından
                faydalanın, size özel gelişmelerden haberdar olun.{" "}
              </p>
            </div>
            <div className={styles.Form}>
              <h3> Giriş Yap</h3>
              <form>
                <label for="E-posta"> E-posta</label>
                <input type="text" />
                <label for="Şifre"> Şifre</label>
                <input type="email" />
              </form>
            </div>
            <button className={styles.LoginBtn}> Giriş Yap</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
