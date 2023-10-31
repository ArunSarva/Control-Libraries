import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement: any) => {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoNumber, setVideoNumber] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progress);
  };

  const handleVideoProgress = (event: { target: { value: any } }) => {
    const manualChange = Number(event.target.value);

    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };
  const handleVideoForwordandbackword = (prop: string) => {
    let manualChange;
    if (prop === "Backward") {
      manualChange = progress - 10;
    } else {
      manualChange = progress + 10;
    }
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };
  const handleNextandBackVideo = (prop: string) => {
   videoElement.current.value = "";
    setProgress(0);
    setIsPlaying(false);
    if (prop === "Next") {
      setVideoNumber(videoNumber + 1);
    } else {
      setVideoNumber(videoNumber - 1);
    }
  };

  const handleVideoSpeed = (event: { target: { value: any } }) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setSpeed(speed);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [isMuted, videoElement]);

  return {
    isMuted,
    isPlaying,
    progress,
    speed,
    togglePlay,
    videoNumber,
    handleOnTimeUpdate,
    handleVideoForwordandbackword,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handleNextandBackVideo,
  };
};

export default useVideoPlayer;
