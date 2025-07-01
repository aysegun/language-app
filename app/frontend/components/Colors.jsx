import React from "react";
import AudioButton from "./AudioButton";
import "./styles/Colors.css";

const colors = [
  { label: "Rojo", audioSrc: "/audio/colors/rojo.mp3", imageSrc: "/images/colors/splash_rojo.png" },
  { label: "Naranja", audioSrc: "/audio/colors/naranja.mp3", imageSrc: "/images/colors/splash_naranja.png" },
  { label: "Amarillo", audioSrc: "/audio/colors/amarillo.mp3", imageSrc: "/images/colors/splash_amarillo.png" },
  { label: "Verde", audioSrc: "/audio/colors/verde.mp3", imageSrc: "/images/colors/splash_verde.png" },
  { label: "Azul", audioSrc: "/audio/colors/azul.mp3", imageSrc: "/images/colors/splash_azul.png" },
  { label: "Rosa", audioSrc: "/audio/colors/rosa.mp3", imageSrc: "/images/colors/splash_rosa.png" },
  { label: "Marrón", audioSrc: "/audio/colors/marron.mp3", imageSrc: "/images/colors/splash_marron.png" },
  { label: "Negro", audioSrc: "/audio/colors/negro.mp3", imageSrc: "/images/colors/splash_negro.png" },
  { label: "Gris", audioSrc: "/audio/colors/gris.mp3", imageSrc: "/images/colors/splash_gris.png" },
  { label: "Blanco", audioSrc: "/audio/colors/blanco.mp3", imageSrc: "/images/colors/splash_blanco.png" },
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
            imageSrc={color.imageSrc}
            type="image"
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
        <a href="/animals">
          <button className="next-button">Animals</button>
        </a>
      </div>
    </div>
  );
};

export default Colors;
