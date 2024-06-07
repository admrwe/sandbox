import { ReactNode } from "react";

import style from "./ThemeProvider.module.css";

interface ThemeProviderProps {
  children: ReactNode;
  theme?: "light" | "dark";
}

const DEFAULT_THEME = "light";

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = DEFAULT_THEME } = props;
  return (
    <div
      className={`${style[DEFAULT_THEME]} ${theme !== DEFAULT_THEME ? style[theme] : null}`}>
      {children}
    </div>
  );
};
