import React, { useState } from "react";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const [number, setNumber] = useState(0);

  const sayfaSayısı = () => {
    setNumber(number + 1);
  };

  return (
    <div className={styles.Buttons}>
      <button
        className={`${styles.BigBtn} ${styles.Btn}`}
        onClick={sayfaSayısı}
      >
        Daha Fazlası
      </button>
      <button className={`${styles.SmallBtn} ${styles.Btn}`}>{number}</button>
    </div>
  );
};

export default Buttons;
