import React from "react";
import styles from "./NewPage.module.scss";

function NewPage({ image, title, writer, time, category, explanation }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.NewPage}>
          <div className={styles.NewPageTitle}>
            <h4> {category} </h4>
            <h1> {title}</h1>
            <p> {explanation}</p>
          </div>
          <div className={styles.NewPageWriter}>
            <h3> {writer} </h3>
            <p> {time}</p>
          </div>
          <div className={styles.NewPageİmage}>
            <img src={image} alt="newPage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
