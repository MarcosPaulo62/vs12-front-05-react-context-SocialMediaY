import { createContext, useState } from "react";
import { IChildren, IPub } from "../utils/interface";

interface IPubContext{
    pubData: IPub[];
}

export const PubContext = createContext({} as IPubContext);

export function PubProvider({ children }: IChildren){
    const [pubData, setPubData] = useState<IPub[] | []>(
        [
            {
                idUser: "3",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: true
            },
            {
                idUser: "2",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: false
            },
            {
                idUser: "1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: true
            },
            
            {
                idUser: "4",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: true
            },
            {
                idUser: "3",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: false
            },
            {
                idUser: "1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: false
            },
            {
                idUser: "3",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: true
            },
            {
                idUser: "4",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: true
            },
            {
                idUser: "2",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                isLiked: false
            }
        ]
    );    

    return(
        <PubContext.Provider value={{ pubData }}>
            {children}
        </PubContext.Provider>
    )
}