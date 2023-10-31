import React, { useEffect, useState } from "react";

import Board from "./Board";
import Modal from "../modal/index";
function Index(props) {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const resetBoard = () => {
    setReset(true);
    setShowModal(false);
  };
  function modalBody() {
    return (
      <>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className=" p-6 flex-auto">{winner}</div>
          <button
            className="p-1 mb-3 w-24 ml-auto mr-auto rounded-3xl  bg-transparent border-0 text-black opacity-50 leading-none font-semibold outline focus:outline-none"
            onClick={() => resetBoard()}
          >
            ResetBoard
          </button>
        </div>
      </>
    );
  }
  useEffect(() => {
    if (winner !== "") {
      setShowModal(true);
    }
  }, [winner]);
  return (
    <>
      <div>
        <Modal showModal={showModal} children={modalBody()} />
        <Board
          reset={reset}
          setReset={setReset}
          winner={winner}
          setWinner={setWinner}
        />
      </div>
    </>
  );
}

export default Index;
