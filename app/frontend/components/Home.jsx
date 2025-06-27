// app/frontend/components/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <h1 style={{ fontSize: "2rem", color: "#9b5de5" }}>Welcome!</h1>
      <img
        src="/images/unicorn.png"
        alt="unicorn"
        style={{ width: "200px", margin: "20px" }}
      />
      <a href="/lesson">
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.5rem",
            backgroundColor: "#f15bb5",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </a>
    </div>
  );
};

export default Home;
