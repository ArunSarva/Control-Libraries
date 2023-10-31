/* eslint-disable react-hooks/rules-of-hooks */

import React, { useRef, useEffect, useState } from "react";
// import video1 from "../../assets/CinematicBackground.mp4";
// import video2 from "../../assets/video_1.mp4";
// import video3 from "../../assets/video_2.mp4";
// import video4 from "../../assets/video_3.mp4";
import useVideoPlayer from "./useVideoPlayer";
import "./index.css";
import {
  BsPlay,
  BsPause,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import {
  FaBackward,
  FaForward,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

let timeout;
let hoveredSecond;

function videoPlayer(props) {
  const videoElement = useRef(null);
  const duplicateRangeref = useRef(null);
  const forwordref = useRef(null);
  const [isMetadata, setIsMetaData] = useState(false);
  const [duration, setDuration] = useState(0);
  const secondVideoRef = useRef(null);
  const progressRef = useRef(null);
  const snapshotRef = useRef(null);
  const volumeRef = useRef(null);
  const animationRef = useRef();
  const [snapshots, setSnapshots] = useState("");
  const videos = [];
  const {
    isMuted,
    isPlaying,
    speed,
    togglePlay,
    videoNumber,
    handleOnTimeUpdate,
    handleVideoForwordandbackword,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handleNextandBackVideo,
  } = useVideoPlayer(videoElement);

  const resetstate = () => {
    videoElement.current.value = null;
    setIsMetaData(false);
    setDuration(0);
    secondVideoRef.current.value = null;
    progressRef.current.value = null;
  };
  useEffect(() => {
    const seconds = videoElement.current.duration;
    setDuration(seconds);
    progressRef.current.max = seconds;
  }, [isMetadata]);

  const calculateTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const returnedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const minutes = Math.floor((secs / 60) % 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    if (returnedHours >= 60) {
      return `${returnedHours}:${returnedMinutes}:${returnedSeconds}`;
    } else if (minutes < 60) {
      return `${minutes}:${returnedSeconds}`;
    } else {
      return `${returnedMinutes}:${returnedSeconds}`;
    }
  };
  const changePlayerCurrentTime = () => {
    progressRef.current.style.setProperty(
      "--seek-before-width",
      `${(progressRef.current.value / duration) * 100}%`
    );
  };
  const onSliderHover = (e) => {
    let hoverTime = (
      ((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
      videoElement?.current?.duration
    ).toFixed(2);

    if (hoverTime < 0) {
      hoverTime = 0;
    }
    hoveredSecond = hoverTime;
    if (secondVideoRef.current) {
      secondVideoRef.current.currentTime = hoveredSecond;
    }

    shoot(secondVideoRef.current);
    if (snapshotRef) {
      snapshotRef.current.style.left = e.clientX - 72 + "px";
    }
  };

  const shoot = (video) => {
    let canvas = capture(video);
    setSnapshots(canvas.toDataURL());
  };
  const checkMetadata = () => {
    setIsMetaData(true);
  };
  const capture = (video) => {
    let w = video.videoWidth;
    let h = video.videoHeight;
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, w, h);
    return canvas;
  };

  const onOutsideSlider = () => {
    setSnapshots("");
  };
  const mouseStopped = () => {
    if (!isPlaying) {
      progressRef.current.style.visibility = "visible";
      forwordref.current.style.visibility = "visible";
      duplicateRangeref.current.style.visibility = "visible";
    } else {
      progressRef.current.style.visibility = "hidden";
      forwordref.current.style.visibility = "hidden";
      duplicateRangeref.current.style.visibility = "hidden";
    }
  };
  const onVideoHover = () => {
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000);
    forwordref.current.style.visibility = "visible";
    duplicateRangeref.current.style.visibility = "visible";
    progressRef.current.style.visibility = "visible";
  };
  const changeRange = () => {
    videoElement.current.currentTime = progressRef.current.value;
    changePlayerCurrentTime();
  };
  const onMouseLeaveVideo = () => {
    forwordref.current.style.visibility = "visible";
    progressRef.current.style.visibility = "visible";
    duplicateRangeref.current.style.visibility = "visible";
  };

  const whilePlaying = () => {
    if (progressRef.current !== null && videoElement.current !== null) {
      progressRef.current.value = videoElement.current?.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };
  const onPlaying = () => {
    whilePlaying();
    timeout = setTimeout(() => {
      progressRef.current.style.visibility = "hidden";
      forwordref.current.style.visibility = "hidden";
      duplicateRangeref.current.style.visibility = "hidden";
    }, 3000);
  };

  const onPause = () => {
    clearTimeout(timeout);
    forwordref.current.style.visibility = "visible";
    progressRef.current.style.visibility = "visible";
    duplicateRangeref.current.style.visibility = "visible";
    cancelAnimationFrame(animationRef.current);
  };
  const handleVideoProgressLocal = (event) => {
    handleVideoProgress(event);
    changeRange();
  };

  const handleVolumeChange = () => {
    videoElement.current.volume = volumeRef.current.value / 100;
  };

  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="videoContainer">
            <div className="forwordButton text-white" ref={forwordref}>
              <div>
                {calculateTime(videoElement?.current?.currentTime)}/
                {calculateTime(duration)}
              </div>
              <div
                onClick={() => {
                  videoNumber > 0 && handleNextandBackVideo("Back");
                  resetstate();
                }}
              >
                <FaStepBackward />
              </div>
              <div
                onClick={() => {
                  handleVideoForwordandbackword("Backward");
                }}
              >
                <FaBackward />
              </div>
              <div className="actions">
                <button onClick={togglePlay}>
                  {!isPlaying ? <BsPlay /> : <BsPause />}
                </button>
              </div>
              <div
                onClick={() => {
                  handleVideoForwordandbackword("Forword");
                }}
              >
                <FaForward />
              </div>
              <div
                onClick={() => {
                  videoNumber < 2 && handleNextandBackVideo("Next");
                  resetstate();
                }}
              >
                <FaStepForward />
              </div>
              <div className="flex flex-row">
                <label className="text-sm">speed</label>
                <select
                  className="velocity"
                  value={speed}
                  onChange={(e) => handleVideoSpeed(e)}
                >
                  <option value="0.50">0.50x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="2">2x</option>
                </select>
              </div>
              <div></div>
              <div className="volumeContainer flex justify-between">
                <button className="mute-btn" onClick={toggleMute}>
                  {!isMuted ? <BsFillVolumeUpFill /> : <BsFillVolumeMuteFill />}
                </button>
                <div className="volumeControlContainer">
                  <input
                    className="volumeControl"
                    type="range"
                    onChange={() => {
                      handleVolumeChange();
                    }}
                    ref={volumeRef}
                    min={0}
                  ></input>
                </div>
              </div>
            </div>
            <video
              src={videos[videoNumber]}
              ref={videoElement}
              preload="auto"
              crossOrigin="anonymous"
              onLoadedMetadata={checkMetadata}
              onTimeUpdate={handleOnTimeUpdate}
              onMouseMove={onVideoHover}
              onPlaying={onPlaying}
              onPause={onPause}
              onMouseOut={onMouseLeaveVideo}
            />
            <video
              src={videos[videoNumber]}
              ref={secondVideoRef}
              className="secondVideoElement"
              onLoadedMetadata={checkMetadata}
              onPlaying={onPlaying}
              onPause={onPause}
            ></video>
            <div className="range">
              <input
                type="range"
                className="amount-progress"
                step="any"
                ref={progressRef}
                min={0}
                max={1}
                onMouseMove={onSliderHover}
                onMouseOut={onOutsideSlider}
                onChange={(e) => {
                  handleVideoProgressLocal(e);
                }}
                value={videoElement?.current?.currentTime}
              />
              <div ref={snapshotRef} className="snapshotContainer">
                <img src={snapshots} alt="" className="snapshotImg" />
                <div className="snapshotTime">
                  {calculateTime(hoveredSecond)}
                </div>
              </div>
            </div>

            <div ref={duplicateRangeref} className="duplicateRange"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default videoPlayer;
