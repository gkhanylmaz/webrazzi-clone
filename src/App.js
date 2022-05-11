import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "components/Signin";
import SingleSearchPage from "pages/SingleSearchPage";
import SingleNewPage from "pages/SingleNewPage";
import SignUp from "components/SignUp";

// import NewPage from "pages/NewPage";

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
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route
            path="/search/:searchText"
            element={<SingleSearchPage data={data} />}
          />
          <Route path="/news/:newID" element={<SingleNewPage data={data} />} />
          {/* <Route path="/news/:newID:id" element={<NewPage data={data} />} /> */}

          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <SideBar />
        <SearchPage />
        <Footer />
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
