import Card from "components/Card/Card";
import React from "react";
import { useParams } from "react-router-dom";

function SingleSearchPage({ data }) {
  const params = useParams();
  const { searchText } = params;
  const filteredData = data.filter((el) => {
    if (
      el.title.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      el.explanation.toLowerCase().includes(searchText.toLocaleLowerCase())
    )
      return true;
    return false;
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <Card data={filteredData} />
    </div>
  );
}

export default SingleSearchPage;
