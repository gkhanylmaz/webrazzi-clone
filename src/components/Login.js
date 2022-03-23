import React, { useState } from "react";
import styles from "./Login.module.scss";
import LoginPage from "./LoginPage";

function Login() {
  const [login, setLogin] = useState(false);

  const loginClose = () => {
    setLogin(!login);
  };

  return (
    <div className={styles.LoginCard}>
      <div className={styles.CardTitle}>
        <p>
          Gündemi yakalayın, etkinlikleri takip edin, özel içeriklere ulaşın!{" "}
        </p>
        <div className={styles.LoginLink}>
          <button
            className={`${styles.Btn} ${styles.LoginBtn}`}
            onClick={loginClose}
          >
            {" "}
            Giriş Yap
          </button>
          <button className={`${styles.Btn} ${styles.RegisterBtn}`}>
            {" "}
            Kayıt Ol
          </button>
        </div>
      </div>
      {login ? <LoginPage /> : false}
    </div>
  );
}

export default Login;
