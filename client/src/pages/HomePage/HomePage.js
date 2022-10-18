import React from "react";

// components
import WbTv from "components/WebrazziTv/WbTv";
import ListCards from "components/ListCards/ListCards";
import Popular from "components/PopularList/Popular";
import WbActivity from "components/WbActivity/WbActivity";
import WbKariyer from "components/WebrazziKariyer/WbKariyer";
import Added from "components/Added/Added";
import Buttons from "components/Buttons/Buttons";
import Highlights from "components/Highlights/Highlights";
import Home from "components/Home/Home";

// styles
import styles from "./HomePage.module.scss";

const HomePage = ({ data }) => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.container}>
        <div className={styles.HomePage}>
          <Home data={data.slice(0, 1)} />
          <Highlights data={data} />
        </div>
        <Added />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            marginTop: "100px",
          }}
        >
          <ListCards data={data.slice(6, 13)} />
          <Popular data={data.slice(13, 18)} />
        </div>
        <WbTv data={data.slice(19, 23)} />
        <ListCards data={data.slice(23, 29)} />
        <WbActivity data={data.slice(29, 32)} />
        <ListCards data={data.slice(32, 38)} />
        <WbKariyer data={data.slice(38, 41)} />
        <ListCards data={data.slice(41, 46)} />
        <Buttons data={data} />
      </div>
    </div>
  );
};

export default HomePage;
