import { createContext } from 'react';
import { type ThemeState } from '@atlaskit/tokens';

interface ThemeContextInterface {
  theme: Partial<ThemeState>;
  setTheme: (theme: Partial<ThemeState>) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: { colorMode: 'light' },
  setTheme: () => {},
});
