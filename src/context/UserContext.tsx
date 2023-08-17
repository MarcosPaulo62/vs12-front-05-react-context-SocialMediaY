import { createContext, useState } from "react";
import { IChildren, IUser } from "../utils/interface";

interface IUserContext{
    userData: IUser[];
    userLogado: IUser;
    getUsers: () => void;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IChildren){
    const [userData, setUserData] = useState<IUser[] | []>([]);

    async function getUsers() {
        try {
            const response = await fetch('../../db.json');     

            if (response.ok) {
                const data = await response.json();
                setUserData(data.users);     
            }
        } catch (error) {
            console.log(error);
        }
    }

    getUsers();

    const userLogado: IUser = userData[0];

    return(
        <UserContext.Provider value={{ userData, userLogado, getUsers }}>
            {children}
        </UserContext.Provider>
    )
}