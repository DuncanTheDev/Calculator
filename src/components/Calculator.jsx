import "./Calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (input === "" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleToggleSign = () => {
    if (input.startsWith("-")) {
      setInput(input.slice(1));
    } else {
      setInput("-" + input);
    }
  };

  const handlePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleCalculate = () => {
    try {
      if (/\/0(?!\d)/.test(input)) {
        setInput("Cannot divide by 0");
        return;
      }

      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="input-box">
        <input className="display" type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button className="light-gray" onClick={handleClear}>
          AC
        </button>
        <button className="light-gray" onClick={handleToggleSign}>
          +/-
        </button>
        <button className="light-gray" onClick={handlePercentage}>
          %
        </button>
        <button className="orange" onClick={() => handleClick("/")}>
          /
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="orange" onClick={() => handleClick("*")}>
          x
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="orange" onClick={() => handleClick("-")}>
          -
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="orange" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}
