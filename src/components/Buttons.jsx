import React from "react";
import { useCalculateContext } from "../context/CalculateContext";
import { useThemeContext } from "../context/ThemeContext";

const Buttons = () => {
  const [themeState, themeDispatch] = useThemeContext();
  const [, dispatchCalc] = useCalculateContext();
  return (
    <>
      <div className="w-full h-auto mt-6 grid grid-cols-4 grid-rows-4 gap-4">
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "DELETE" })}>
          DEL
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "(" })}>
          (
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: ")" })}>
          )
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "CALCULATE" })}>
          =
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "1" })}>
          1
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "2" })}>
          2
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "3" })}>
          3
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "+" })}>
          +
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "4" })}>
          4
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "5" })}>
          5
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "6" })}>
          6
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "-" })}>
          -
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "7" })}>
          7
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "8" })}>
          8
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "9" })}>
          9
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "*" })}>
          *
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "RESTART" })}>
          C
        </button>
        <button type="button" className="buttonCalc text-primary dark:text-gray-400" onClick={() => dispatchCalc({ type: "UPDATE", payload: "0" })}>
          0
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "." })}>
          .
        </button>
        <button type="button" className="buttonCalc text-dark dark:text-whiteCS" onClick={() => dispatchCalc({ type: "UPDATE", payload: "/" })}>
          /
        </button>
      </div>
      <div className="w-full h-auto flex justify-center mt-3">
        <button type="button" className={`btnToggleMode ${themeState === "dark" ? "toggleActive" : "toggleUnactive"}`} onClick={() => themeDispatch("dark")}>
          🌚
        </button>
        <button type="button" className={`btnToggleMode ${themeState === "light" ? "toggleActive" : "toggleUnactive"}`} onClick={() => themeDispatch("light")}>
          🌞
        </button>
      </div>
    </>
  );
};

export default Buttons;
