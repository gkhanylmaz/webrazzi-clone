import React from "react";

const Card2 = ({ ren }) => {
  return (
    <div>
      <div className="card">
        <div className="under"> </div>
        <div className="card-title">
          <div className="card-section">
            <a href="/"> {ren.category}</a>
            <h2> {ren.title}</h2>
            <p> {ren.explanation} </p>
            <div className="card-time">
              <a href="/"> {ren.writer}</a>
              <p> {ren.time}</p>
            </div>
          </div>
          <div className="card-image">
            <img src={ren.image} alt={ren.writer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
