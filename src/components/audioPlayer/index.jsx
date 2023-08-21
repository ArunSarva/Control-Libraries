import React from "react";
import audio1 from "../../assets/audio/Kaavaalaayya.mp3";

function AudioPlayer() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2">Audio Player</h1>
        <div className="mb-2">
          <audio controls src={audio1} />
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;
