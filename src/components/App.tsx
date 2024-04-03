import React, { Suspense } from 'react';
import { Router, createBrowserHistory, RouteComponent } from 'react-resource-router';
import ThemeContextProvider from '~src/components/context/ThemeContext/ThemeContextProvider';
import { appRoutes } from '~src/appRoutes';
import BasePage from '~src/components/common/BasePage/BasePage';
const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback="Loading...">
        <Router routes={appRoutes} history={history} plugins={[]}>
          <BasePage>
            <RouteComponent />
          </BasePage>
        </Router>
      </Suspense>
    </ThemeContextProvider>
  );
};
export default App;
