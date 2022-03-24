import styles from "./Buttons.module.scss";
import React, { useState } from "react";
import Card from "../Card/Card";

const Buttons = ({ data }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const randomCard = () => {
    setNumber1(Math.floor(Math.random() * +5));
    setNumber2(number2 + 10);
  };

  return (
    <>
      <Card data={data.slice(number1, number2)} />
      <div className={styles.Buttons}>
        <button
          className={`${styles.BigBtn} ${styles.Btn}`}
          onClick={randomCard}
        >
          Daha Fazlası
        </button>
        <button className={`${styles.SmallBtn} ${styles.Btn}`}></button>
      </div>{" "}
    </>
  );
};

export default Buttons;
