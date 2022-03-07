import React from "react";
import styles from "../Styled/WbActivity.module.scss";

const ActivityCard = ({ der }) => {
  return (
    <div>
      <div className={styles.ActivityCard}>
        <div className={styles.CardImage}>
          <img src={der.image} alt="card-images" />
        </div>
        <div className={styles.CardTitle}>
          <div className={styles.TimeLocation}>
            <p> {der.time} </p>
            <p> {der.category}</p>
          </div>
          <div className={styles.title}>
            <h3>{der.title}</h3>
            <p>{der.explanation}</p>
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
