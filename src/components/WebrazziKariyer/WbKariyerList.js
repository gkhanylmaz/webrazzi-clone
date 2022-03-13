import React from "react";
import styles from "./WbKariyer.module.scss";

const WbKariyerList = ({ image, title, category, writer }) => {
  return (
    <>
      <div className={styles.KariyerCard}>
        <div className={styles.CardImage}>
          <img src={image} alt="card-image2" />
        </div>
        <div className={styles.CardTitle}>
          <h3> {title}</h3>
          <span>
            {" "}
            <b> {writer} </b> "-"<i> {category} </i>
          </span>
        </div>
      </div>
    </>
  );
};

export default WbKariyerList;
