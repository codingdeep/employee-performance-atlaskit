import React, {useCallback, useContext} from 'react';
import {Notifications} from "@atlaskit/atlassian-navigation";
import {Popup} from "@atlaskit/popup";
import {HelpMenuContext} from "~src/components/context/HelpMenuContext/HelpMenuContextProvider";
import {NotificationIndicator} from "@atlaskit/notification-indicator"
import {MenuGroup} from "@atlaskit/menu";
import {ButtonItem, Section} from "@atlaskit/menu";

const NotificationBadge = () => {
   return (
       <NotificationIndicator/>
   )
}
const NotificationList = () =>{
   return (
       <MenuGroup>
          <Section title="ONE">
             <ButtonItem>Hello</ButtonItem>
          </Section>
       </MenuGroup>
   )
}
const NotificationDrawer:React.FC = () => {
   const {isHelpDialogOpen, handleDialogOpen} = useContext(HelpMenuContext);
   const handleIsOpen = useCallback(()=>{
     handleDialogOpen();
   },[handleDialogOpen])
   return(
         <Popup trigger={triggerProps=>(
             <Notifications
                 {...triggerProps}
                 testId="notification-drawer-trigger"
                 tooltip="NOTE" badge={NotificationBadge} onClick={handleIsOpen}/>
                  )}
                isOpen={isHelpDialogOpen}
                content={NotificationList}/>
   )
}
export default NotificationDrawer;