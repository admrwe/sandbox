import { ReactNode } from 'react';

import style from './ThemeProvider.module.css';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: 'light' | 'light-sepia' | 'dark';
  dense?: boolean;
}

const DEFAULT_THEME = 'light';

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, dense = false, theme = DEFAULT_THEME } = props;
  return (
    <div
      className={`${style.global} ${style.semantic} ${style[theme]} ${dense ? style.dense : ''}`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      {children}
    </div>
  );
};
