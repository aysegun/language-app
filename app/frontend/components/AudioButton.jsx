import React from "react";

const AudioButton = ({ label, audioSrc }) => {
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play().catch((err) => console.error("Audio failed to play", err));
  };

  return (
    <button onClick={playAudio} className="number-button">
      {label}
    </button>
  );
};

export default AudioButton;
