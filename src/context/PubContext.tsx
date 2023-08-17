import { createContext, useState } from "react";
import { IChildren, IPub } from "../utils/interface";

interface IPubContext{
    pubData: IPub[];
    getPubs: () => void;
}

export const PubContext = createContext({} as IPubContext);

export function PubProvider({ children }: IChildren){
    const [pubData, setPubData] = useState<IPub[] | []>([]);

    async function getPubs() {
        try {
            const response = await fetch('../../db.json');     

            if (response.ok) {
                const data = await response.json();
                setPubData(data.pubs);     
            }
        } catch (error) {
            console.log(error);
        }
    }

    getPubs();

    return(
        <PubContext.Provider value={{ pubData, getPubs }}>
            {children}
        </PubContext.Provider>
    )
}