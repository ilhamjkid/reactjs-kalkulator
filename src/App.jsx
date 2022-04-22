import React from "react";
import Calculator from "./components/Calculator";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
