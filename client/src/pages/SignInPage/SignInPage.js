import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import styles from "./SignInPage.module.scss";
import logo from "image/logo.svg";
import { useNavigate } from "react-router-dom";
import visibilityIcon from "image/visibilityIcon.svg";
function SignInPage({ onSubmittion }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        onSubmittion(userCredential.user);
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };
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
              <form onSubmit={onSubmit}>
                <label for="E-posta"> E-posta</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
                <div className={styles.passwordIcon}>
                  <label for="Şifre"> Şifre</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={onChange}
                  />
                  <img
                    src={visibilityIcon}
                    alt="show password"
                    className="showPassword"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
                <button className={styles.LoginBtn}> Giriş Yap</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
