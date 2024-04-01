import React, { useContext } from 'react';
import ThemeContextProvider from '~src/components/context/ThemeContext/ThemeContextProvider';
import { Box } from '@atlaskit/primitives';
import AnotherComponent from '~src/components/AnotherComponent';
import { ThemeContext } from '~src/components/context/ThemeContext/ThemeContext';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <Box>Current Theme: {theme.colorMode}</Box>
      <AnotherComponent />
    </ThemeContextProvider>
  );
};
export default App;
