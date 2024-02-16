import React, { useState } from "react";
import "./BasicCalculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [buttons] = useState([
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "+",
    "=",
  ]);
  const handleButtonClick = (value: any) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" aria-label="Result" value={input} readOnly />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        {buttons.map((button) => (
          <div
            className="allButtons"
            // style={{ width: "50px", height: "50px", padding: "15px" }}
            key={button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </div>
        ))}
      </div>
      <button
        className="clearbutton"
        key={"C"}
        onClick={() => handleButtonClick("C")}
      >
        {"C"}
      </button>
    </div>
  );
};

export default Calculator;
