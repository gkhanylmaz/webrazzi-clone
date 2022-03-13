import React from "react";
import PopularList from "./PopularList";
import styles from "./PopularList.module.scss";

const Popular = ({ data }) => {
  return (
    <>
      <div className={styles.popularTable}>
        <div className={styles.popularTables}>
          <div className={styles.dayPopular}>
            <h1> Bugün popüler</h1>
          </div>
          {data.map((el, index) => (
            <PopularList {...el} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
