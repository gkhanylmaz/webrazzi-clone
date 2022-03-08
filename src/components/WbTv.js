import React from "react";
import styles from "../Styled/WbTv.module.scss";
import VideoCard from "./VideoCard";

const WbTv = ({ data }) => {
  return (
    <div className={styles.wbTv}>
      <div className={styles.wbVideo}>
        <div className={styles.tvLogo}>
          <img
            className={styles.logo}
            src="https://webrazzi.com/v8/img/wbrands/tv_dark.svg"
            alt="logo"
          />
          <a href="/"> Tüm Videolar</a>
        </div>
        <div className={styles.wb}>
          <div className={styles.wbSection}>
            <div className={styles.tvVideo}>
              <a href="/"> </a>
              <img
                src="https://cdn.webrazzi.com/uploads/2022/03/gm-229_800x450.png"
                alt="video"
              />

              <span className={styles.videoTime}> 07:22 </span>
            </div>
            <div className={styles.wbTitle}>
              <h2>
                {" "}
                General Mobile GM 22 Pro ve GM 22 Plus neler <br /> sunuyor? |…
              </h2>
            </div>
          </div>

          <div className={styles.videoCards}>
            {data.map((der, index) => (
              <VideoCard der={der} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbTv;
