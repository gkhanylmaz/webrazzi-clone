import React from "react";
import "../Styled/home.css";

const Home = ({ data }) => {
  return (
    <div className="home-section">
      {data.map((der) => (
        <>
          <div className="home-img">
            <img src={der.image} alt="home-img" />
          </div>
          <div className="home-left-title">
            <div className="home-title">
              <h2> {der.title}</h2>
            </div>
            <div className="home-pr">
              <p>{der.explanation}</p>
            </div>
            <div className="home-time">
              <a href="/">{der.writer}</a>
              <p> {der.time}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
