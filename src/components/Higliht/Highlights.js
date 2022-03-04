import React from "react";
import "./Highlights.scss";

const Highlights = ({ data }) => {
  return (
    <div className="high">
      <h2 className="high-title"> Öne Çıkanlar </h2>
      {data.slice(1, 6).map((per, index) => (
        <div className="highlights-1" key={index}>
          <img src={per.image} alt="foto" />
          <div className="high-titles">
            <h2> {per.title}</h2>
            <div className="high-time">
              <a href="/"> {per.writer}</a>
              <p> {per.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
