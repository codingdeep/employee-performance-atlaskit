import React, {useState} from 'react';
import {UserContext, UserContextInterface} from './UserContext';
import {User} from "~src/components/context/TopNavigationContext/mockData";

interface Props {
    children: React.ReactNode;
}
const transformUser = (user: User): UserContextInterface['user'] => {
    return {
        email: user.username,
        name: `${user.firstName} ${user.lastName}`,
        accountID: user.aaid,
        picture: user.avatar,
        jobTitle: '',
        isManager: true,
        department: 'Engineer',
        organization: 'Zora Corporation'
    }
}
const userInfo = JSON.parse(localStorage.getItem('user')!);

const UserContextProvider: React.FC<Props> = ({children}) => {
    const [user, setUser] = useState<UserContextInterface['user']>(transformUser(userInfo));
   return(
       <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
   )
}
export default UserContextProvider;