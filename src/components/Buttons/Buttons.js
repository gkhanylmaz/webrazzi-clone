import styles from "./Buttons.module.scss";

const Buttons = ({ data }) => {
  return (
    <>
      <div className={styles.Buttons}>
        <button className={`${styles.BigBtn} ${styles.Btn}`}></button>
        <button className={`${styles.SmallBtn} ${styles.Btn}`}></button>
      </div>{" "}
    </>
  );
};

export default Buttons;
