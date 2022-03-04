import React from "react";
import "../Styled/card.css";
import Card2 from "./Card2";

const Card = ({ data }) => {
  return (
    <div className="cards">
      {data.map((ren, index) => (
        <Card2 key={index} ren={ren} />
      ))}
    </div>
  );
};

export default Card;
