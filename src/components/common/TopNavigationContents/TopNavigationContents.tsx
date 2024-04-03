import React from 'react';
import { AtlassianNavigation, PrimaryButton, Help } from '@atlaskit/atlassian-navigation';
import ProductHomeButton from '~src/components/common/TopNavigationContents/ProductHomeButton';
import SettingsDropdown from '~src/components/common/TopNavigationContents/SettingsDropdown';
import UserAccountProfile from '~src/components/common/TopNavigationContents/UserAccountProfile';

const TopNavigationContents: React.FC = () => {
  return (
    <AtlassianNavigation
      label="Elevate"
      moreLabel="More"
      primaryItems={[]}
      renderProfile={UserAccountProfile}
      renderSettings={SettingsDropdown}
      renderProductHome={ProductHomeButton}
    />
  );
};
export default TopNavigationContents;
