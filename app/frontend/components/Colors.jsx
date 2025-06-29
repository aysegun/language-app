import React from "react";
import AudioButton from "./AudioButton";
import "./styles/Colors.css";

const colors = [
  { label: "Rojo", audioSrc: "/audio/colors/rojo.mp3" },
  { label: "Verde", audioSrc: "/audio/colors/verde.mp3" },
  { label: "Azul", audioSrc: "/audio/colors/azul.mp3" },
  { label: "Amarillo", audioSrc: "/audio/colors/amarillo.mp3" },
  { label: "Rosa", audioSrc: "/audio/colors/rosa.mp3" },
  { label: "Marron", audioSrc: "/audio/colors/marron.mp3" },
  { label: "Negro", audioSrc: "/audio/colors/negro.mp3" },
  { label: "Naranja", audioSrc: "/audio/colors/naranja.mp3" },
  { label: "Blanco", audioSrc: "/audio/colors/blanco.mp3" },
  { label: "Gris", audioSrc: "/audio/colors/gris.mp3" },
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
      <div>
        <a href="/">
          <button className="back-button">Back to Home</button>
        </a>
        <a href="/lesson">
          <button className="next-button">Numbers</button>
        </a>
      </div>
    </div>
  );
};

export default Colors;
