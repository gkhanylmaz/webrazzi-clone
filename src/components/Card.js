import React from "react";
import Card2 from "./Card2";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((ren, index) => (
        <Card2 key={index} ren={ren} />
      ))}
    </div>
  );
};

export default Card;
