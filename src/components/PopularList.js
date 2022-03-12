import React from "react";
import styles from "../Styled/PopularList.module.scss";

const PopularList = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <div className={styles.popularText} key={index}>
          <div className={styles.title}>
            <h2> {el.title}</h2>
            <a href="/"> {el.writer}</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularList;
