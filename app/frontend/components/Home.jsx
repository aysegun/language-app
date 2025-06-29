// app/frontend/components/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-heading">Welcome Aylin!</h1>
      <a href="/lesson">
        <button className="home-button">
          Start
        </button>
      </a>
    </div>
  );
};

export default Home;
