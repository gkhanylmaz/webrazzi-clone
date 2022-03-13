import React from "react";
import styles from "./PopularList.module.scss";

const PopularList = ({ writer, title }) => {
  return (
    <>
      <div className={styles.popularText}>
        <div className={styles.title}>
          <h2> {title}</h2>
          <a href="/"> {writer}</a>
        </div>
      </div>
    </>
  );
};

export default PopularList;
