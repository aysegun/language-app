import React from "react";
import AudioButton from "./AudioButton";
import "./Colors.css";

const colors = [
  { label: "Rojo", audioSrc: "/audio/colors/red.mp3" },
  { label: "Verde", audioSrc: "/audio/colors/green.mp3" },
  { label: "Azul", audioSrc: "/audio/colors/blue.mp3" },
];

const Colors = () => {
  return (
    <div className="colors-page">
      <h2 className="colors-heading">Spanish Colors</h2>
      <div className="colors-grid">
        {colors.map((color, index) => (
          <AudioButton
            key={index}
            label={color.label}
            audioSrc={color.audioSrc}
          />
        ))}
      </div>
      <a href="/">
        <button className="back-button">Back to Home</button>
      </a>
    </div>
  );
};

export default Colors;
