// app/frontend/components/Lesson.jsx
import React from "react";
import AudioButton from "./AudioButton";
import "./styles/Lesson.css";

const numbers = [
  { value: 0, label: "0", audio: "/audio/0.mp3" },
  { value: 1, label: "1", audio: "/audio/1.mp3" },
  { value: 2, label: "2", audio: "/audio/2.mp3" },
  { value: 3, label: "3", audio: "/audio/3.mp3" },
  { value: 4, label: "4", audio: "/audio/4.mp3" },
  { value: 5, label: "5", audio: "/audio/5.mp3" },
  { value: 6, label: "6", audio: "/audio/6.mp3" },
  { value: 7, label: "7", audio: "/audio/7.mp3" },
  { value: 8, label: "8", audio: "/audio/8.mp3" },
  { value: 9, label: "9", audio: "/audio/9.mp3" },
  { value: 10, label: "10", audio: "/audio/10.mp3" },
  { value: 11, label: "11", audio: "/audio/11.mp3" },
  { value: 12, label: "12", audio: "/audio/12.mp3" },
  { value: 13, label: "13", audio: "/audio/13.mp3" },
  { value: 14, label: "14", audio: "/audio/14.mp3" },
  { value: 15, label: "15", audio: "/audio/15.mp3" },
  { value: 16, label: "16", audio: "/audio/16.mp3" },
  { value: 17, label: "17", audio: "/audio/17.mp3" },
  { value: 18, label: "18", audio: "/audio/18.mp3" },
  { value: 19, label: "19", audio: "/audio/19.mp3" },
  { value: 20, label: "20", audio: "/audio/20.mp3" },
];

const Lesson = () => {
  return (
    <div className="lesson-page">
      <h2 className="lesson-heading">Spanish Numbers 1–20</h2>
      <div className="numbers-grid">
        {numbers.map((num) => (
          <AudioButton
            key={num.value}
            label={num.label}
            audioSrc={num.audio}
          />
        ))}
      </div>
      <a href="/">
        <button className="back-button">Back to Home</button>
      </a>
      <a href="/colors">
        <button className="next-button">Colors</button>
      </a>
    </div>
  );
};

export default Lesson;
