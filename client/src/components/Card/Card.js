import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ category, writer, image, title, explanation, time, id }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className={styles.postCards}>
      <div className={styles.postCard}>
        <div className={styles.Card} onClick={handleCardClick}>
          <div className={styles.Under}> </div>
          <div className={styles.CardTitle}>
            <div className={styles.CardSection}>
              <a href="/"> {category}</a>
              <h2> {title}</h2>
              <p> {explanation.substring(0, 100)} </p>
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
      </div>
    </div>
  );
};

export default Card;
