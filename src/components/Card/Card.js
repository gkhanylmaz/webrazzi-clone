import React from "react";
import Card2 from "./CardList";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const newPage = () => {
    navigate("./newPage");
  };
  return (
    <div onClick={newPage}>
      {data.map((el, index) => (
        <Card2 key={index} {...el} />
      ))}
    </div>
  );
};

export default Card;
