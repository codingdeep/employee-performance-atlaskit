import React, { useContext } from 'react';
import { AtlassianNavigation, Help, PrimaryButton } from '@atlaskit/atlassian-navigation';
import ProductHomeButton from '~src/components/common/TopNavigationContents/ProductHomeButton';
import SettingsDropdown from '~src/components/common/TopNavigationContents/SettingsDropdown';
import UserAccountProfile from '~src/components/common/TopNavigationContents/UserAccountProfile';
import { HelpMenuContext } from '~src/components/context/HelpMenuContext/HelpMenuContextProvider';
import NotificationDrawer from '~src/components/common/TopNavigationContents/NotificationDrawer';
import { TopNavigationContext } from '~src/components/context/TopNavigationContext/TopNavigationContext';
import { Box, Flex } from '@atlaskit/primitives';
import { createRouterSelector, useRouterActions } from 'react-resource-router';

const useRoutePath = createRouterSelector(o => o.route.path);
const useRouteName = createRouterSelector(o => o.route.name);

const TopNavigationContents: React.FC = () => {
  const { hasAccessToCalibration, hasAccessToGoals } = useContext(TopNavigationContext);
  const { push } = useRouterActions();
  const routeName = useRouteName();
  const routePath = useRoutePath();
  const navItems = [
    {
      key: 'home',
      label: 'Home',
      routeName: 'home',
      path: '/',
    },
    ...(hasAccessToGoals
      ? [
          {
            key: 'goals',
            label: (
              <Flex gap="space.100" alignItems="center" justifyContent="center">
                <Box>Goals</Box>
              </Flex>
            ),
            routeName: 'goals',
            path: '/goals',
          },
        ]
      : []),
    {
      key: 'feedback',
      label: (
        <Flex alignItems="center" justifyContent="center">
          Feedback
        </Flex>
      ),
      routeName: 'feedback',
      path: '/feedback',
    },
    {
      key: 'assessment',
      label: (
        <Flex alignItems="center" justifyContent="center">
          Assessment
        </Flex>
      ),
      routeName: 'assessment',
      path: '/assessment',
    },
    ...(hasAccessToCalibration
      ? [
          {
            key: 'calibrations',
            label: (
              <Flex gap="space.100" alignItems="center" justifyContent="center">
                <Box>Calibration</Box>
              </Flex>
            ),
            routeName: 'calibrations',
            path: '/calibrations',
          },
        ]
      : []),
  ];

  const { handleDialogOpen } = useContext(HelpMenuContext);
  const toggleHelp = () => {
    handleDialogOpen();
  };
  const renderHelp = () => {
    return <Help onClick={toggleHelp} tooltip="Get Help" />;
  };

  const onEditCalibrationPage = (destination: string) => {
    return (
      destination === 'calibrations' &&
      ['/calibration-set/edit/:calibrationID', '/calibrations/:calibrationSetID'].includes(
        routePath,
      )
    );
  };

  const renderPrimaryItems = () => {
    console.log('rendered');
    return navItems.map(item => {
      const url = `${item.path}${onEditCalibrationPage(item.routeName) ? '?reload=true' : ''}`;
      return (
        <PrimaryButton
          isHighlighted={routeName === item.routeName || routePath.includes(`/${item.routeName}`)}
          onClick={() => push(url)}
        >
          {item.label}
        </PrimaryButton>
      );
    });
  };

  return (
    <AtlassianNavigation
      label="Elevate"
      moreLabel="More"
      primaryItems={renderPrimaryItems()}
      renderProfile={UserAccountProfile}
      renderSettings={SettingsDropdown}
      renderProductHome={ProductHomeButton}
      renderHelp={renderHelp}
      renderNotifications={NotificationDrawer}
    />
  );
};
export default TopNavigationContents;
