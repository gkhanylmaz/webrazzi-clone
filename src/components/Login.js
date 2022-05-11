import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const Signin = () => {
    navigate("/Signin");
  };

  const SignUp = () => {
    navigate("/SignUp");
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
            onClick={Signin}
          >
            {" "}
            Giriş Yap
          </button>
          <button
            className={`${styles.Btn} ${styles.RegisterBtn}`}
            onClick={SignUp}
          >
            {" "}
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
