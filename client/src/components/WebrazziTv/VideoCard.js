import React from "react";
import styles from "./WbTv.module.scss";

const VideoCard = ({ image, time, title }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.cardİmage}>
        <img src={image} alt="image2-video" />
        <span className={styles.videoTime}> {time}</span>
      </div>
      <div className={styles.videoTitle}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
