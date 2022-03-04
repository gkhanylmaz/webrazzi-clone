import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RecentlyAdded from "./pages/RecentlyAdded";
import styles from "./App.module.scss";
import axios from "axios";

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
      </div>
    </>
  );
}

export default App;
