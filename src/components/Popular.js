import React from "react";
import PopularList from "./PopularList";
import styles from "../Styled/PopularList.module.scss";

const Popular = ({ data }) => {
  return (
    <>
      <div className={styles.popularTable}>
        <div className={styles.popularTables}>
          <div className={styles.dayPopular}>
            <h1> Bugün popüler</h1>
          </div>
          <PopularList data={data} />
        </div>
      </div>
    </>
  );
};

export default Popular;
