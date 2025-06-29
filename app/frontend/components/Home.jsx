// app/frontend/components/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-heading">Welcome!</h1>
      <img
        className="home-image"
        src="/images/unicorn.jpg"
        alt="unicorn"
      />
      <a href="/lesson">
        <button className="home-button">
          Start
        </button>
      </a>
    </div>
  );
};

export default Home;
