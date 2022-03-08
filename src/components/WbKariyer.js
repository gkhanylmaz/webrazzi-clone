import React from "react";
import styles from "../Styled/WbKariyer.module.scss";

const WbKariyer = ({ data }) => {
  return (
    <div className={styles.WbKariyer}>
      <div className={styles.Kariyer}>
        <div className={styles.KariyerHead}>
          <img
            src="https://webrazzi.com/v8/img/wbrands/hr_dark.svg"
            alt="kariyer.logo"
          />
          <a href="/"> Tümü </a>
        </div>
        <div className={styles.KariyerCards}>
          {data.map((der, index) => (
            <div className={styles.KariyerCard}>
              <div className={styles.CardImage}>
                <img src={der.image} alt="card-image2" />
              </div>
              <div className={styles.CardTitle}>
                <h3> {der.title}</h3>
                <span>
                  {" "}
                  <b> {der.writer} </b> "-"<i> {der.category} </i>
                </span>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default WbKariyer;
