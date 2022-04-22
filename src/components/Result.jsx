import React from "react";
import { useCalculateContext } from "../context/CalculateContext";

const Result = () => {
  const [stateCalc] = useCalculateContext();
  return (
    <div className="bg-light dark:bg-dark shadow-InnerShadowLight dark:shadow-InnerShadowDark w-full h-48 py-4 px-6 rounded-3xl flex justify-end items-end lg:h-36">
      <span className="text-primary dark:text-white text-3xl font-medium overflow-y-hidden overflow-x-auto scrollHide">{stateCalc || "0"}</span>
    </div>
  );
};

export default Result;
