import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CalculateProvider } from "../context/CalculateContext";
import { useThemeContext } from "../context/ThemeContext";
import Buttons from "./Buttons";
import Result from "./Result";

const Calculator = () => {
  const [themeState] = useThemeContext();
  useEffect(() => {
    document.querySelector("html").className = themeState;
    document.body.classList.add("bg-light", "dark:bg-dark");
  }, [themeState]);
  return (
    <HelmetProvider>
      <CalculateProvider>
        <Helmet>
          <meta name="theme-color" content={themeState === "light" ? "#E9EAF1" : "#55555F"} />
        </Helmet>
        <div className="bg-light dark:bg-dark w-full min-h-screen flex justify-center">
          <div className="p-4 md:p-20 lg:p-4 w-full min-h-screen lg:w-80 lg:h-screen">
            <Result />
            <Buttons />
          </div>
        </div>
      </CalculateProvider>
    </HelmetProvider>
  );
};

export default Calculator;
