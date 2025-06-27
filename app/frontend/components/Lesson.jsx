// app/frontend/components/Lesson.jsx
import React from "react";

const numbers = [
  { value: 1, label: "uno", audio: "/audio/1.mp3" },
  { value: 2, label: "dos", audio: "/audio/2.mp3" },
  // ... up to 20
];

const Lesson = () => {
  const playAudio = (src) => {
    new Audio(src).play();
  };

  return (
    <div className="lesson-page">
      <h2 style={{ color: "#00bbf9" }}>Spanish Numbers 1–20</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {numbers.map((num) => (
          <button
            key={num.value}
            onClick={() => playAudio(num.audio)}
            style={{
              padding: "1rem",
              fontSize: "1.5rem",
              backgroundColor: "#00f5d4",
              border: "none",
              borderRadius: "12px",
              width: "80px",
              height: "80px",
              cursor: "pointer",
            }}
          >
            {num.value}
          </button>
        ))}
      </div>
      <a href="/">
        <button
          style={{
            marginTop: "2rem",
            backgroundColor: "#9b5de5",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "12px",
            fontSize: "1rem",
          }}
        >
          Back to Home
        </button>
      </a>
    </div>
  );
};

export default Lesson;
