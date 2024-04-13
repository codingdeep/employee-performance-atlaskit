import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {getUserPermission} from "~src/components/context/TopNavigationContext/mockData";

interface TopNavigationContextInterface {
    hasAccessToCalibration: boolean;
    hasAccessToGoals: boolean;
}
export const TopNavigationContext = createContext<TopNavigationContextInterface>({hasAccessToCalibration: false, hasAccessToGoals: false});


const TopNavigationContextProvider = ({children}: {children: ReactNode}) => {
    const [hasAccessToCalibration, setHasAccessToCalibration] = useState<boolean>(false);
    const [hasAccessToGoals, setHasAccessToGoals] = useState<boolean>(false);

    useEffect(()=>{
      fetchUserPermission()
          .then(permission => {
              setHasAccessToCalibration(permission.hasAccessToCalibration);
              setHasAccessToGoals(permission.hasAccessToGoals);
          }).catch(error => {
              console.log(error)
      });
    },[]);

    const fetchUserPermission = async () => {
        const user = JSON.parse(localStorage.getItem('user')!);
        return await getUserPermission(user.aaid);
    }

   return(
       <TopNavigationContext.Provider value={{hasAccessToCalibration, hasAccessToGoals}}>{children}</TopNavigationContext.Provider>
   )
}
export default TopNavigationContextProvider;