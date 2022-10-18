import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../image/logo.svg";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdRssFeed } from "react-icons/md";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.FooterCategorys}>
          <div className={styles.MobileLogo}>
            <img src={logo} alt="logo" />
            <img src="https://webrazzi.com/v8/appstore.png" alt="app-store" />
            <img
              src="https://webrazzi.com/v8/playstore.png"
              alt="google-store"
            />
          </div>
          <div className={styles.Category}>
            <h3> KATEGORİLER</h3>
            <ul>
              <li>
                {" "}
                <a href="/"> Haberler</a>
              </li>
              <li>
                {" "}
                <a href="/"> Webrazzi Insights</a>
              </li>
              <li>
                {" "}
                <a href="/"> Videolar</a>
              </li>
              <li>
                {" "}
                <a href="/"> Galeriler</a>
              </li>
              <li>
                {" "}
                <a href="/"> Raporlar</a>
              </li>
            </ul>
          </div>
          <div className={styles.Topics}>
            <h3> KONULAR</h3>
            <ul>
              <li>
                {" "}
                <a href="/"> Dijital</a>
              </li>
              <li>
                {" "}
                <a href="/"> E-Ticaret</a>
              </li>
              <li>
                {" "}
                <a href="/"> Girişim</a>
              </li>
              <li>
                {" "}
                <a href="/"> Mobil</a>
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
          <div></div>
          <div className={styles.Webrazzi}>
            <h3> WEBRAZZİ</h3>
            <ul>
              <li>
                {" "}
                <a href="/"> Hakkında</a>
              </li>
              <li>
                {" "}
                <a href="/"> Yazarlar</a>
              </li>
              <li>
                {" "}
                <a href="/"> Katkıda Bulunan</a>
              </li>
              <li>
                {" "}
                <a href="/"> Reklam</a>
              </li>
              <li>
                {" "}
                <a href="/"> Girişiminizi Tanıtın</a>
              </li>
              <li>
                {" "}
                <a href="/"> İletişim</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                {" "}
                <a href="/">Etkinlikler </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/"> İş İlanları </a>{" "}
              </li>
              <li className={styles.undirline}> </li>
              <li>
                {" "}
                <a href="/">Gizlilik Politikası </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/"> Kullanım Koşulları </a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.FooterBottom}>
          <div></div>
          <div className={styles.FooterTitle}>
            <p> Gökhan Yılmaz Webrazzi Clone </p>
          </div>
          <div className={styles.SocialMedia}>
            <ul>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <AiOutlineTwitter />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  <BsFacebook />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <AiFillLinkedin />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <AiOutlineInstagram />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  {" "}
                  <MdRssFeed />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
