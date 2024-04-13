export interface Permissions{
    hasAccessToCalibration: boolean;
    hasAccessToGoals: boolean;
}
export interface User{
    firstName: string;
    lastName: string;
    staffID: string;
    aaid: string;
    avatar: string;
    username: string;
    password: string
}

export const UserPermissions: (Permissions & {aaid: string})[] = [
    {
        aaid: '1234',
        hasAccessToGoals: true,
        hasAccessToCalibration: true
    },
    {
        aaid: '3424',
        hasAccessToCalibration: true,
        hasAccessToGoals: false
    },
    {
        aaid: '5677',
        hasAccessToCalibration: false,
        hasAccessToGoals: true
    }
]

const Users:User[] = [
    {firstName: 'Kunle', lastName: 'Badmus', staffID: 'badmus', aaid: '1234', avatar: '',
        username: 'kunle@gmail.com',
        password: '1234'
    },
    {firstName: 'Rubel', lastName: 'Ahmmed', staffID: 'ahmmed', aaid: '3424', avatar: '',
        username: 'ahmmedrubel.ad@gmail.com', password: '3456'},
    {firstName: 'Abu', lastName: 'Raihan', staffID: 'raihan', aaid: '5677', avatar: '',
        username: 'aburaihan@gmail.com', password: '5677'},
];

export const getUser = (aaid: string) => {
    return new Promise((resolve, reject) => {
       const user = Users.find(user => user.aaid === aaid);
       if(user){
           resolve(user)
       }else{
           reject({message: `User doesn\'t exist with the aaid: ${aaid}`})
       }
    })
}

export const getUserPermission = (aaid: string):Promise<Permissions> => {
    return new Promise((resolve, reject) => {
        const userPermission = UserPermissions.find(permission => permission.aaid === aaid);
        if(userPermission){
            resolve(userPermission)
        }else {
            reject({message: `User doesn\'t exist with the aaid: ${aaid}`})
        }
    })
}

export default Users;