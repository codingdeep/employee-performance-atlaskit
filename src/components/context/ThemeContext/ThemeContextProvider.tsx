import React, { useEffect, useState } from 'react';
import {
  setGlobalTheme,
  themeObjectToString,
  ThemeState,
  themeStringToObject,
} from '@atlaskit/tokens';
import { ThemeContext } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

// const defaultThemes: Partial<ThemeState> = {
//   spacing: 'spacing',
//   // @ts-ignore
//   typography: 'typography',
// };

const getThemePreference = (): Partial<ThemeState> => {
  const savedThemePreference = window.localStorage.getItem('theme');
  let colorMode: Partial<ThemeState> = getOsThemePreference();
  // legacy saved theme
  if (savedThemePreference === 'light' || savedThemePreference === 'dark') {
    colorMode = { colorMode: savedThemePreference };
  } else if (savedThemePreference !== null) {
    colorMode = themeStringToObject(savedThemePreference);
  }
  return {
    light: 'light',
    dark: 'dark',
    colorMode: 'auto',
    ...colorMode,
  };
};

const getOsThemePreference = (): Partial<ThemeState> => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkModeMediaQuery.matches) {
    return { colorMode: 'dark' };
  }
  return { colorMode: 'light' };
};

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Partial<ThemeState>>(getThemePreference());
  useEffect(() => {
    setGlobalTheme({ ...theme });
    window.localStorage.setItem('theme', themeObjectToString(theme));
  }, [theme, setTheme]);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
