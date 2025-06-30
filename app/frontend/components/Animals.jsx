import React from "react";
import AudioButton from "./AudioButton";
import "./styles/Animals.css";

const animals = [
  { label: "Águila", audioSrc: "/audio/animals/aguila.mp3", imageSrc: "/images/animals/aguila.png" },
  { label: "Conejo", audioSrc: "/audio/animals/conejo.mp3", imageSrc: "/images/animals/conejo.png" },
  { label: "Pájaro", audioSrc: "/audio/animals/pajaro.mp3", imageSrc: "/images/animals/pajaro.png" },
  { label: "Vaca", audioSrc: "/audio/animals/vaca.mp3", imageSrc: "/images/animals/vaca.png" },
  { label: "Cerdo", audioSrc: "/audio/animals/cerdo.mp3", imageSrc: "/images/animals/cerdo.png" },
  { label: "Caballo", audioSrc: "/audio/animals/caballo.mp3", imageSrc: "/images/animals/caballo.png" },
  { label: "León", audioSrc: "/audio/animals/leon.mp3", imageSrc: "/images/animals/leon.png" },
  { label: "Tortuga", audioSrc: "/audio/animals/tortuga.mp3", imageSrc: "/images/animals/tortuga.png" },
  { label: "Mono", audioSrc: "/audio/animals/mono.mp3", imageSrc: "/images/animals/mono.png" },
  { label: "Elefante", audioSrc: "/audio/animals/elefante.mp3", imageSrc: "/images/animals/elefante.png" },
];

const Animals = () => {
  return (
    <div className="animals-page">
      <h2 className="animals-heading">Spanish Animals</h2>
      <div className="animals-grid">
        {animals.map((animal, index) => (
          <AudioButton
            key={index}
            label={animal.label}
            audioSrc={animal.audioSrc}
            imageSrc={animal.imageSrc}
            type="image"
          />
        ))}
      </div>
      <div>
        <a href="/">
          <button className="back-button">Back to Home</button>
        </a>
        <a href="/colors">
          <button className="next-button">Colors</button>
        </a>
        <a href="/lesson">
          <button className="next-button">Numbers</button>
        </a>
      </div>
    </div>
  );
};

export default Animals;
