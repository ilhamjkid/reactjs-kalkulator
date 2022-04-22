import { createContext, useContext, useReducer } from "react";

const CalculateContext = createContext({
  empty: true,
});

const useCalculateContext = () => {
  return useContext(CalculateContext);
};

const reducer = (state, action) => {
  const ops = ["/", "*", "+", "-", "."];
  switch (action.type) {
    case "UPDATE":
      if (ops.includes(action.payload) && state === "") return state;
      if (ops.includes(action.payload) && ops.includes(state.slice(-1))) return state;
      return state + action.payload;
    case "CALCULATE":
      try {
        const matchLogic = eval(state).toString();
        return matchLogic;
      } catch (err) {
        return state;
      }
    case "DELETE":
      if (state === "") return state;
      else return state.slice(0, -1);
    case "RESTART":
      return "";
    default:
      break;
  }
};

const CalculateProvider = ({ children }) => {
  const [stateCalc, dispatchCalc] = useReducer(reducer, "");
  const calculateContextValue = [stateCalc, dispatchCalc];
  return <CalculateContext.Provider value={calculateContextValue}>{children}</CalculateContext.Provider>;
};

export { useCalculateContext, CalculateProvider };
