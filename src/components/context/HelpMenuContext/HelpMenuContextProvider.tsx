import React, {useState, createContext, useCallback} from 'react';
import {NOOP} from "~src/utils/constants/constants";


interface HelpMenuContextInterface{
   isHelpDialogOpen: boolean;
   handleDialogOpen: () =>void;
}

export const HelpMenuContext = createContext<HelpMenuContextInterface>({isHelpDialogOpen: false, handleDialogOpen:NOOP});

const HelpMenuContextProvider = ({children}: {children: React.ReactNode}) => {
   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
   const handleDialogOpen = useCallback(()=>{
      setIsDialogOpen(prevState => !prevState)
   },[setIsDialogOpen])
  return(
      <HelpMenuContext.Provider value={{isHelpDialogOpen: isDialogOpen, handleDialogOpen}}>{children}</HelpMenuContext.Provider>
  )
}

export default HelpMenuContextProvider;

