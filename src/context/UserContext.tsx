import { createContext, useState } from "react";
import { IChildren, IUser } from "../utils/interface";
import AnaBanana from "../assets/AnaBanana.png";
import JoaoLeitao from "../assets/JoaoLeitao.png";
import Pafuncio from "../assets/Pafuncio.png";
import VeraVassoura from "../assets/VeraVassoura.png";

interface IUserContext{
    userData: IUser[];
    userLogado: IUser;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IChildren){
    const [userData, setUserData] = useState<IUser[]>(
        [
            {
                id: "1",
                imgUser: AnaBanana,
                name: "Ana Banana",
                qtdPubs: 2,
                followers: 500
            },
            {
                id: "2",
                imgUser: JoaoLeitao,
                name: "João Leitão",
                qtdPubs: 12,
                followers: 502
            },
            {
                id: "3",
                imgUser: Pafuncio,
                name: "Pafuncio",
                qtdPubs: 20,
                followers: 300
            },
            {
                id: "4",
                imgUser: VeraVassoura,
                name: "Vera Vassoura",
                qtdPubs: 3,
                followers: 90
            }
        ]
    );

    const userLogado: IUser = userData[0];

    return(
        <UserContext.Provider value={{ userData, userLogado }}>
            {children}
        </UserContext.Provider>
    )
}