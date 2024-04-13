import React, { Suspense } from 'react';
import { Router, createBrowserHistory, RouteComponent } from 'react-resource-router';
import ThemeContextProvider from '~src/components/context/ThemeContext/ThemeContextProvider';
import { appRoutes } from '~src/appRoutes';
import BasePage from '~src/components/common/BasePage/BasePage';
import HelpMenuContextProvider from "~src/components/context/HelpMenuContext/HelpMenuContextProvider";
import TopNavigationContextProvider from "~src/components/context/TopNavigationContext/TopNavigationContext";
import UserContextProvider from "~src/components/context/UserContext/UserContextProvider";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback="Loading...">
        <Router routes={appRoutes} history={history} plugins={[]}>
            <UserContextProvider>
            <TopNavigationContextProvider>
                <HelpMenuContextProvider>
                    <BasePage>
                        <RouteComponent />
                    </BasePage>
                </HelpMenuContextProvider>
            </TopNavigationContextProvider>
            </UserContextProvider>
        </Router>
      </Suspense>
    </ThemeContextProvider>
  );
};
export default App;
