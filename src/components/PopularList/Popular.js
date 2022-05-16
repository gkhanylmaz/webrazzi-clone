import React from "react";
import PopularCard from "./PopularCard";
import styles from "./PopularCard.module.scss";

const Popular = ({ data }) => {
  return (
    <>
      <div className={styles.popularTable}>
        <div className={styles.popularTables}>
          <div className={styles.dayPopular}>
            <h1> Bugün popüler</h1>
          </div>
          {data.map((el, index) => (
            <PopularCard {...el} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
