import React from "react";
import Card from "components/Card/Card";
import styles from "./ListCards.module.scss";

const ListCards = ({ data }) => {
  return (
    <div className={styles.listCards}>
      {data.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </div>
  );
};

export default ListCards;
