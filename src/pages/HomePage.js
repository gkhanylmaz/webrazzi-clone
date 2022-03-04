import React from "react";
import Highlights from "components/Higliht/Highlights";
import Home from "components/Home";

const HomePage = ({ data }) => {
  return (
    <>
      <div className="home-bg">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Home data={data.slice(0, 1)} />
          <Highlights data={data} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
