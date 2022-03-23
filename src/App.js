import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RecentlyAdded from "./pages/RecentlyAdded";
import styles from "./App.module.scss";
import axios from "axios";
import WbTv from "components/WebrazziTv/WbTv";
import Card from "components/Card/Card";
import WbActivity from "components/WbActivity/WbActivity";
import WbKariyer from "components/WebrazziKariyer/WbKariyer";
import Footer from "components/Footer/Footer";
import Added from "components/Added/Added";
import SideBar from "components/Sidebar/SideBar";
import SearchPage from "components/SearchPage/SearchPage";
import Buttons from "components/Buttons/Buttons";

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
    <div className={styles.App}>
      <Header />
      <SideBar />
      <SearchPage />

      <div className={styles.container}>
        <HomePage data={data} />
        <Added />
        <RecentlyAdded data={data} />
        <WbTv data={data.slice(19, 23)} />
        <Card data={data.slice(23, 29)} />
        <WbActivity data={data.slice(29, 32)} />
        <Card data={data.slice(32, 38)} />
        <WbKariyer data={data.slice(38, 41)} />
        <Card data={data.slice(41, 46)} />
        <Buttons data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
