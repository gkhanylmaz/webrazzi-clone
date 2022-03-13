import React from "react";
import styles from "./WbActivity.module.scss";

const ActivityCard = ({ title, explanation, image, time, category }) => {
  return (
    <div>
      <div className={styles.ActivityCard}>
        <div className={styles.CardImage}>
          <img src={image} alt="card-images" />
        </div>
        <div className={styles.CardTitle}>
          <div className={styles.TimeLocation}>
            <p> {time} </p>
            <p> {category}</p>
          </div>
          <div className={styles.title}>
            <h3>{title}</h3>
            <p>{explanation}</p>
          </div>
        </div>
        <div className={styles.CardButons}>
          <button className={styles.DarkBtn}> Bilet Al</button>
          <button className={styles.LightBtn}> İncele</button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
