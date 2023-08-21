import React from "react";
import audio1 from "../../assets/audio/Kaavaalaayya.mp3";

function AudioPlayer() {
  return (
    <>
      <audio controls src={audio1} />
    </>
  );
}

export default AudioPlayer;
