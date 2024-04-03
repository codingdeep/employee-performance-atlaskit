import React, { useCallback, useState } from 'react';
import { Popup, TriggerProps } from '@atlaskit/popup';
import { SkeletonIconButton } from '@atlaskit/atlassian-navigation/skeleton';
import { Box, xcss } from '@atlaskit/primitives';
import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';

interface Props {
  clickHandler?: () => void;
  triggerProps?: TriggerProps;
}
const SkeletonProfileButton = ({ clickHandler, triggerProps }: Props) => {
  return (
    <Box onClick={clickHandler} xcss={xcss({ cursor: 'pointer' })} {...triggerProps}>
      <SkeletonIconButton>
        <img
          src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/70121:51923b95-ff1e-44de-90fb-c1836e0d2192/aab06ada-5940-4f06-83f6-691b96ab0aa4/128"
          alt="Your profile and settings"
        />
      </SkeletonIconButton>
    </Box>
  );
};

interface ImageIconProps {
  imageAddress: string;
}
const ImageIcon = ({ imageAddress }: ImageIconProps) => {
  return <img width="15px" src={imageAddress} alt="address" />;
};

const UserAccountContent = () => {
  return (
    <MenuGroup>
      <Section title="Account">
        <ButtonItem iconBefore={<SkeletonProfileButton />} description="ahmmedrubel.ad@gmail.com">
          ahmmedrubel.ad
        </ButtonItem>
      </Section>
      <Section>
        <ButtonItem>Switch Account</ButtonItem>
      </Section>
      <Section title="RECENT WORKSPACES" hasSeparator>
        <ButtonItem
          iconBefore={
            <ImageIcon imageAddress="https://bitbucket.org/workspaces/localstep/avatar/?ts=1686213565" />
          }
        >
          localstep
        </ButtonItem>
      </Section>
      <Section>
        <ButtonItem>All workspaces</ButtonItem>
      </Section>
      <Section hasSeparator>
        <ButtonItem>Logout</ButtonItem>
      </Section>
    </MenuGroup>
  );
};

const UserAccountProfile = () => {
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
      content={UserAccountContent}
      placement="bottom-end"
      trigger={triggerProps => (
        <SkeletonProfileButton clickHandler={handleTrigger} triggerProps={triggerProps} />
      )}
    />
  );
};
export default UserAccountProfile;
