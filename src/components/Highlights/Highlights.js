import React from "react";
import styles from "./Highlights.module.scss";

const Highlights = ({ data }) => {
  return (
    <div className={styles.High}>
      <h2 className={styles.HighTitle}> Öne Çıkanlar </h2>
      {data.slice(1, 6).map((el, index) => (
        <div className={styles.Highlights} key={index}>
          <img src={el.image} alt="foto" />
          <div className={styles.HighTitles}>
            <h2> {el.title}</h2>
            <div className={styles.HighTime}>
              <a href="/"> {el.writer}</a>
              <p> {el.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
