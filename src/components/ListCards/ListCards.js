import React from "react";
import Card from "components/Card/Card";

const ListCards = ({ data }) => {
  return (
    <div>
      {data.map((el, index) => (
        <Card key={index} {...el} />
      ))}
    </div>
  );
};

export default ListCards;
