import Card from "components/Card/Card";
import React from "react";
import { useParams } from "react-router-dom";

function SingleNewPage({ data }) {
  const params = useParams();
  const { newID } = params;
  const filteredData = data.filter((el) => {
    if (el.id === newID) return true;
    return false;
  });

  return (
    <div>
      <Card {...filteredData[0]} />
    </div>
  );
}

export default SingleNewPage;
