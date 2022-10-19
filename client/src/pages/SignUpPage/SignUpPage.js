import React, { useState } from "react";
import styles from "./SignUpPage.module.scss";
import logo from "image/logo.svg";
import { useNavigate } from "react-router-dom";
import visibilityIcon from "image/visibilityIcon.svg";
import { register } from "../../axios/index";



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate()


  return (
    <div>
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
                <h3> Üye Ol</h3>
                <form onSubmit={(e) => {
              e.preventDefault();

              register(formData)
                .then((res) => {
                  navigate("/signin");
                })
                .catch((err) => console.log(err));
            }}>
                  <label for="Ad Soyad"> Ad Soyad</label>
                  <input
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                  />
                  <label for="E-posta"> E-posta</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <div className={styles.passwordIcon}>
                    <label for="Şifre"> Şifre</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <img
                      src={visibilityIcon}
                      alt="show password"
                      className="showPassword"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  </div>
                  <button className={styles.LoginBtn} type="submit"> Kayıt Ol</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
