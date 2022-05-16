import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = ({ data }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <div className={styles.HomeSection}>
      {data.map((el, index) => (
        <div onClick={() => handleCardClick(el.id)}>
          <div className={styles.HomeImage}>
            <img src={el.image} alt="home-img" />
          </div>
          <div className={styles.LeftTitle}>
            <div className={styles.HomeTitle}>
              <h2> {el.title}</h2>
            </div>
            <div className={styles.HomePr}>
              <p>{el.explanation}</p>
            </div>
            <div className={styles.HomeTime}>
              <a href="/">{el.writer}</a>
              <p> {el.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
