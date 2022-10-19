import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

function Login({ onClick, user }) {
  const navigate = useNavigate();
  const signIn = () => {
    onClick();
    navigate("/signin");
  };

  const signUp = () => {
    onClick();
    navigate("/signup");
  };
 console.log(user)
  return (
    <div className={styles.LoginCard}>
      {user.fullname ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {user?.fullname?.toUpperCase()}
        </div>
      ) : (
        <div className={styles.CardTitle}>
          <p>
            Gündemi yakalayın, etkinlikleri takip edin, özel içeriklere ulaşın!{" "}
          </p>
          <div className={styles.LoginLink}>
            <button
              className={`${styles.Btn} ${styles.LoginBtn}`}
              onClick={signIn}
            >
              {" "}
              Giriş Yap
            </button>
            <button
              className={`${styles.Btn} ${styles.RegisterBtn}`}
              onClick={signUp}
            >
              {" "}
              Kayıt Ol
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
