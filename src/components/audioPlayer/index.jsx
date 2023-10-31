import React, { useRef, useState } from "react";

function AudioPlayer() {
  const [file, setFile] = useState("");
  const hiddenFileInput = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2">Audio Player</h1>
        <div className="mb-2">
          <audio controls src={file} />
          <button
            onClick={handleClick}
            type="button"
            className="inline-block rounded-full bg-sky-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-500 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
          >
            Change song
          </button>
          <input
            onChange={(e) => {
              handleFileChange(e);
            }}
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            accept=".mp3"
          />
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;
