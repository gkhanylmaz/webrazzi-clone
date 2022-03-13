import React from "react";
import Card2 from "./CardList";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((el, index) => (
        <Card2 key={index} {...el} />
      ))}
    </div>
  );
};

export default Card;
