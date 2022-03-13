import Popular from "components/PopulerList/Popular";
import React from "react";
import Card from "../components/Card/Card";

const RecentlyAdded = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          marginTop: "100px",
        }}
      >
        <Card data={data.slice(6, 13)} />
        <Popular data={data.slice(13, 18)} />
      </div>
    </>
  );
};

export default RecentlyAdded;
