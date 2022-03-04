import React from "react";
import styles from "../Styled/WbTv.module.scss";

const WbTv = () => {
  return (
    <div className={styles.wbTv}>
      <div className="container">
        <div className="tvPost">
          <div className="tvLogo">
            <img
              src="https://webrazzi.com/v8/img/wbrands/tv_dark.svg"
              alt="logo"
            />
            <a href="/"> Tüm Videolar </a>
          </div>
          <div className="postVideo">
            <img
              src="https://cdn.webrazzi.com/uploads/2022/03/gm-229_800x450.png"
              alt="tv video"
            />

            <div className="postVideoTitle">
              <a href="/">
                General Mobile GM 22 Pro ve GM 22 Plus neler sunuyor? |…{" "}
              </a>
              <span className="videoDuration"> 07:22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbTv;
