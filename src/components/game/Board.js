import { useState, useEffect, useRef } from "react";
import "./Board.css";
import Info from "./Info";

const Board = ({ reset, setReset, winner, setWinner }) => {
  const [turn, setTurn] = useState(0);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const boardRef = useRef(null);
  const draw = (event, index) => {
    if (data[index - 1] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";
      data[index - 1] = current;
      event.target.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
    // alert(turn);
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);
    const cells = boardRef.current.children;
    for (let i = 0; i < 9; i++) {
      cells[i].innerText = "";
    }
    setTurn(0);
    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const checkRow = () => {
      let ans = false;
      for (let i = 0; i < 9; i += 3) {
        ans |=
          data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
      }
      return ans;
    };

    const checkCol = () => {
      let ans = false;
      for (let i = 0; i < 3; i++) {
        ans |=
          data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
      }
      return ans;
    };

    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++;
        }
      });
      return count === 9;
    };

    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      setWinner("It's a Tie!");
    }
  });

  return (
    <div>
      <div ref={boardRef} className="board">
        <div className="gameinput input-1" onClick={(e) => draw(e, 1)}></div>
        <div className="gameinput input-2" onClick={(e) => draw(e, 2)}></div>
        <div className="gameinput input-3" onClick={(e) => draw(e, 3)}></div>
        <div className="gameinput input-4" onClick={(e) => draw(e, 4)}></div>
        <div className="gameinput input-5" onClick={(e) => draw(e, 5)}></div>
        <div className="gameinput input-6" onClick={(e) => draw(e, 6)}></div>
        <div className="gameinput input-7" onClick={(e) => draw(e, 7)}></div>
        <div className="gameinput input-8" onClick={(e) => draw(e, 8)}></div>
        <div className="gameinput input-9" onClick={(e) => draw(e, 9)}></div>
      </div>
      <Info playerOne={turn} />
    </div>
  );
};

export default Board;
