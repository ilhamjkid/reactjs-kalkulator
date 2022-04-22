import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext({
  empty: true,
});

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const reducer = (state, action) => {
  localStorage.setItem("theme", action);
  return action;
};

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(reducer, "light");
  const themeContextValue = [themeState, themeDispatch];
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) themeDispatch(theme);
    else themeDispatch("light");
  }, []);
  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export { useThemeContext, ThemeProvider };
