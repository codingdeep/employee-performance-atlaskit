import React, { useCallback, useContext, useState } from 'react';
import { Popup } from '@atlaskit/popup';
import { Settings } from '@atlaskit/atlassian-navigation';
import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';
import { ThemeContext } from '~src/components/context/ThemeContext/ThemeContext';
import { ThemeColorModes } from '~node_modules/@atlaskit/tokens';
enum OppositeLabel {
  LIGHT = 'light',
  DARK = 'dark',
}
const mapToOpposite: Record<OppositeLabel, string> = {
  [OppositeLabel.LIGHT]: 'dark',
  [OppositeLabel.DARK]: 'light',
};
const PopupContents = ({ closePopup }: { closePopup: () => void }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = useCallback(() => {
    setTheme?.({ colorMode: mapToOpposite[theme.colorMode as OppositeLabel] as ThemeColorModes });
    closePopup();
  }, [setTheme]);

  return (
    <MenuGroup>
      <Section>
        <ButtonItem
          onClick={switchTheme}
        >{`Switch to ${mapToOpposite[theme?.colorMode as OppositeLabel]} theme`}</ButtonItem>
      </Section>
    </MenuGroup>
  );
};

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTrigger = useCallback(() => {
    setIsOpen(prev => !prev);
  }, [setIsOpen]);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      content={() => <PopupContents closePopup={closePopup} />}
      placement="bottom-end"
      trigger={triggerProps => (
        <Settings onClick={handleTrigger} tooltip="Settings" {...triggerProps} />
      )}
    />
  );
};
export default SettingsDropdown;
