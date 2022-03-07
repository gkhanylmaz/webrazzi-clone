import React from "react";
import styles from "../Styled/Card.module.scss";

const Card2 = ({ ren }) => {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.Under}> </div>
        <div className={styles.CardTitle}>
          <div className={styles.CardSection}>
            <a href="/"> {ren.category}</a>
            <h2> {ren.title}</h2>
            <p> {ren.explanation} </p>
            <div className={styles.CardTime}>
              <a href="/"> {ren.writer}</a>
              <p> {ren.time}</p>
            </div>
          </div>
          <div className={styles.CardImage}>
            <img src={ren.image} alt={ren.writer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
