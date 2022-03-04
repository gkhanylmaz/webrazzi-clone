import React from "react";
import styles from "../Styled/PopularList.module.scss";

const PopularList = ({ data }) => {
  //   console.log(der.title);
  return (
    <>
      {data.map((der, index) => (
        <div className={styles.popularText}>
          <div className={styles.title}>
            <h2> {der.title}</h2>
            <a href="/"> {der.writer}</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularList;
