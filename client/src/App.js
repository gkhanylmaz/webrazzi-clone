import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import SideBar from "components/Sidebar/SideBar";
import Search from "components/Search/Search";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// pages
import SignUpPage from "pages/SignUpPage";
import SignInPage from "pages/SignInPage/SignInPage";
import SingleSearchPage from "pages/SingleSearchPage";
import SingleNewPage from "pages/SingleNewPage";
import HomePage from "pages/HomePage/HomePage";

// styles
import styles from "./App.module.scss";

// import NewPage from "pages/NewPage";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const handleSubmission = (user) => {
    setUser(user);
  };

  useEffect(() => {
    axios
      .get("https://6220e384afd560ea69a0fc79.mockapi.io/comments")
      .then((result) => {
        setData(result.data);
      }, []);
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/search/:searchText"
            element={<SingleSearchPage data={data} />}
          />
          <Route path="/news/:newID" element={<SingleNewPage data={data} />} />
          {/* <Route path="/news/:newID:id" element={<NewPage data={data} />} /> */}

          <Route path="/" element={<HomePage data={data} />} />
          <Route
            path="/Signin"
            element={
              <SignInPage onSubmittion={handleSubmission} setUser={setUser} />
            }
          />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
        <SideBar />
        <Search />
        <Footer />
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
