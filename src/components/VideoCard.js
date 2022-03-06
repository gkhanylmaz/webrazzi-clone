import React from "react";
import styles from "../Styled/WbTv.module.scss";

const VideoCard = ({ der }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.cardİmage}>
        <img src={der.image} alt="image2-video" />
        <span className={styles.videoTime}> {der.time}</span>
      </div>
      <div className={styles.videoTitle}>
        <h2>{der.title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
