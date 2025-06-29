import React from "react";
import "./styles/AudioButton.css"; // optional, or split into separate CSS

const AudioButton = ({ label, audioSrc, imageSrc, type = "default" }) => {
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play().catch((err) => console.error("Audio failed to play", err));
  };

  // For colors with pencil images
  if (type === "image" && imageSrc) {
    return (
      <div className="color-button" onClick={playAudio}>
        <img src={imageSrc} alt={label} className="pencil-image" />
        <p>{label}</p>
      </div>
    );
  }

  // Default number button
  return (
    <button className="number-button" onClick={playAudio}>
      {label}
    </button>
  );
};

export default AudioButton;
