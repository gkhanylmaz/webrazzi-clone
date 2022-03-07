import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RecentlyAdded from "./pages/RecentlyAdded";
import styles from "./App.module.scss";
import axios from "axios";
import WbTv from "components/WbTv";
import Card from "components/Card";
import WbActivity from "components/WbActivity";
import WbKariyer from "components/WbKariyer";
import WbRapor from "components/WbRapor";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://6220e384afd560ea69a0fc79.mockapi.io/comments")
      .then((result) => {
        setData(result.data);
      }, []);
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Header />
      <div className={styles.container}>
        <HomePage data={data} />
        <RecentlyAdded data={data} />
        <WbTv data={data.slice(19, 23)} />
        <Card data={data.slice(23, 29)} />
        <WbActivity data={data.slice(29, 32)} />
        <Card data={data.slice(32, 38)} />
        <WbKariyer data={data.slice(38, 41)} />
        <Card data={data.slice(41, 46)} />
        <WbRapor />
      </div>
    </>
  );
}

export default App;
