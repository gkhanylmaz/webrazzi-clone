import React from "react";
import Highlights from "components/Highlights/Highlights";
import Home from "components/Home/Home";

const HomePage = ({ data }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Home data={data.slice(0, 1)} />
        <Highlights data={data} />
      </div>
    </>
  );
};

export default HomePage;
