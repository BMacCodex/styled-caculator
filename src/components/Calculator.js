// src/components/Calculator.js
import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display)); // Note: eval can be dangerous
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="w-64 mx-auto mt-20 p-4 rounded-lg shadow-lg bg-amber-700">
      <h1 className="text-white text-8xl mb-4 absolute top-0 left-0 right-0 text-center">
        {" "}
        Badass Calculator{" "}
      </h1>
      <div className="bg-black text-white text-2xl text-right p-2 mb-4 rounded">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
          "C",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`text-xl p-4 rounded ${
              btn === "=" ? "bg-yellow-500 text-black" : "bg-gray-200"
            } ${btn === "C" ? "col-span-2 bg-yellow-500 text-black" : ""} ${
              btn === "/" ||
              btn === "*" ||
              btn === "-" ||
              btn === "+" ||
              btn === "="
                ? "bg-yellow-500 text-black"
                : "bg-gray-200"
            } hover:bg-yellow-500 text-black active:bg-gray-400`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
