import NewPage from "pages/NewPage";
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
      {filteredData.map((el, index) => (
        <NewPage {...el} key={index} />
      ))}
    </div>
  );
}

export default SingleNewPage;
