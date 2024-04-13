import React, {createContext} from 'react';
interface UserInterface {
    email: string;
    name: string;
    accountID: string;
    picture: string;
    jobTitle: string;
    organization?: string;
    department?: string;
    isManager?: boolean;
    aaid?: string;
}
export interface UserContextInterface {
   user: UserInterface;
   setUser: React.Dispatch<React.SetStateAction<UserInterface>>;
}

export const UserContext = createContext<Partial<UserContextInterface>>({});