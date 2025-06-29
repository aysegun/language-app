// app/frontend/components/Lesson.jsx
import React from "react";
import "./Lesson.css";

const numbers = [
  { value: 0, label: "zero", audio: "/audio/0.mp3" },
  { value: 1, label: "uno", audio: "/audio/1.mp3" },
  { value: 2, label: "dos", audio: "/audio/2.mp3" },
  { value: 3, label: "tres", audio: "/audio/3.mp3" },
  { value: 4, label: "cuatro", audio: "/audio/4.mp3" },
  { value: 5, label: "cinco", audio: "/audio/5.mp3" },
  { value: 6, label: "seis", audio: "/audio/6.mp3" },
  { value: 7, label: "siete", audio: "/audio/7.mp3" },
  { value: 8, label: "ocho", audio: "/audio/8.mp3" },
  { value: 9, label: "nueve", audio: "/audio/9.mp3" },
  { value: 10, label: "diez", audio: "/audio/10.mp3" },
  { value: 11, label: "once", audio: "/audio/11.mp3" },
  { value: 12, label: "doce", audio: "/audio/12.mp3" },
  { value: 13, label: "trece", audio: "/audio/13.mp3" },
  { value: 14, label: "catorce", audio: "/audio/14.mp3" },
  { value: 15, label: "quince", audio: "/audio/15.mp3" },
  { value: 16, label: "dieciseis", audio: "/audio/16.mp3" },
  { value: 17, label: "diecisiete", audio: "/audio/17.mp3" },
  { value: 18, label: "dieciocho", audio: "/audio/18.mp3" },
  { value: 19, label: "diecinueve", audio: "/audio/19.mp3" },
  { value: 20, label: "veinte", audio: "/audio/20.mp3" },
];


const Lesson = () => {
  const playAudio = (src) => {
    new Audio(src).play();
  };

  return (
    <div className="lesson-page">
      <h2 className="lesson-heading">Spanish Numbers 1–20</h2>
      <div className="numbers-grid">
        {numbers.map((num) => (
          <button
            key={num.value}
            onClick={() => playAudio(num.audio)}
            className="number-button"
          >
            {num.value}
          </button>
        ))}
      </div>
      <a href="/">
        <button className="back-button">Back to Home</button>
      </a>
    </div>
  );
};

export default Lesson;
