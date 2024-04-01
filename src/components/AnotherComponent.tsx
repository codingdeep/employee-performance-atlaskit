import React, { useContext } from 'react';
import { ThemeContext } from '~src/components/context/ThemeContext/ThemeContext';
const AnotherComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme?.({ colorMode: 'dark' })}>{theme.colorMode}</button>;
};
export default AnotherComponent;
