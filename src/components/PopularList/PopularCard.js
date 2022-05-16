import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopularCard.module.scss";

const PopularCard = ({ writer, title, id }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`news/${id}`);
  };
  return (
    <>
      <div className={styles.popularText} onClick={handleCardClick}>
        <div className={styles.title}>
          <h2> {title}</h2>
          <a href="/"> {writer}</a>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
