import React from "react";
import styles from "../Styled/Card.module.scss";

const Card2 = ({ category, writer, image, title, explanation, time }) => {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.Under}> </div>
        <div className={styles.CardTitle}>
          <div className={styles.CardSection}>
            <a href="/"> {category}</a>
            <h2> {title}</h2>
            <p> {explanation} </p>
            <div className={styles.CardTime}>
              <a href="/"> {writer}</a>
              <p> {time}</p>
            </div>
          </div>
          <div className={styles.CardImage}>
            <img src={image} alt={writer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
