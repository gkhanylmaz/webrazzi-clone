import React from "react";
import styles from "../Styled/WbKariyer.module.scss";

const WbKariyer = () => {
  return (
    <div className={styles.WbKariyer}>
      <div className={styles.container}>
        <div className={styles.Kariyer}>
          <div className={styles.KariyerHead}>
            <img
              src="https://webrazzi.com/v8/img/wbrands/hr_dark.svg"
              alt="kariyer.logo"
            />
            <a href="/"> Tümü</a>
          </div>
          <div className={styles.KariyerCards}>
            <div className={styles.KariyerCard}>
              <div className={styles.CardImage}>
                <img
                  src="https://cdn.webrazzi.com/kariyer/2020/11/webrazzi_1605520845_logo.png"
                  alt="card-image2"
                />
              </div>
              <div className={styles.CardTitle}>
                <h3> Insights Specialist</h3>
                <span>
                  {" "}
                  <b> Webrazzi </b> "-"<i> Kadıköy / İstanbul </i>
                </span>
              </div>
            </div>
            <div className={styles.KariyerCard}>
              <div className={styles.CardImage}>
                <img
                  src="https://cdn.webrazzi.com/kariyer/2020/11/webrazzi_1605520845_logo.png"
                  alt="card-image2"
                />
              </div>
              <div className={styles.CardTitle}>
                <h3> Insights Specialist</h3>
                <span>
                  {" "}
                  <b> Webrazzi </b> "-"<i> Kadıköy / İstanbul </i>
                </span>
              </div>
            </div>
            <div className={styles.KariyerCard}>
              <div className={styles.CardImage}>
                <img
                  src="https://cdn.webrazzi.com/kariyer/2020/11/webrazzi_1605520845_logo.png"
                  alt="card-image2"
                />
              </div>
              <div className={styles.CardTitle}>
                <h3> Insights Specialist</h3>
                <span>
                  {" "}
                  <b> Webrazzi </b> "-"<i> Kadıköy / İstanbul </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbKariyer;
