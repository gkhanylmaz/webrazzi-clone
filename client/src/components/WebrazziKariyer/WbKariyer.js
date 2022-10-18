import React from "react";
import styles from "./WbKariyer.module.scss";
import WbKariyerList from "./WbKariyerList";

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
          {data.map((el, index) => (
            <WbKariyerList {...el} key={index} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default WbKariyer;
