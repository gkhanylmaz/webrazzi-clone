import React from "react";
import styles from "../Styled/WbActivity.module.scss";
import ActivityCard from "./ActivityCard";
const WbActivity = ({ data }) => {
  return (
    <div className={styles.WbActivity}>
      <div className={styles.container}>
        <div className={styles.ActivityLogo}>
          <img
            src="https://webrazzi.com/v8/img/wbrands/events_dark.svg"
            alt="activity-logo"
          />
        </div>
        <div classname={styles.ActivitySection}>
          <div className={styles.ActivityCards}>
            {data.map((der, index) => (
              <ActivityCard der={der} key={der.index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbActivity;