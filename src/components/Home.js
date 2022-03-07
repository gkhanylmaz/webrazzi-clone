import React from "react";
import styles from "../Styled/Home.module.scss";

const Home = ({ data }) => {
  return (
    <div className={styles.HomeSection}>
      {data.map((der) => (
        <>
          <div className={styles.HomeImage}>
            <img src={der.image} alt="home-img" />
          </div>
          <div className={styles.LeftTitle}>
            <div className={styles.HomeTitle}>
              <h2> {der.title}</h2>
            </div>
            <div className={styles.HomePr}>
              <p>{der.explanation}</p>
            </div>
            <div className={styles.HomeTime}>
              <a href="/">{der.writer}</a>
              <p> {der.time}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
