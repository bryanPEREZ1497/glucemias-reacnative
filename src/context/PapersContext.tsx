import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import getUser from "../helpers/getUserFromStorage";
import { Paper } from "../interfaces/appInterfaces";
import getPapers from "../helpers/getPapers";

type PapersContextProps = {
    papers: Paper[];
    setPapers: Dispatch<SetStateAction<Paper[]>>
}

export const PapersContext = createContext({} as PapersContextProps);

export const PapersProvider = ({ children }: any) => {
    const [papers, setPapers] = useState<Paper[]>([]);
    useEffect(() => {
        loadPapers();
    }, [])

    const loadPapers = async () => {
        let gotPapers = await getPapers();
        let userOnStorage = await getUser();
        gotPapers = gotPapers.filter(paper => paper.name === userOnStorage.name);//usar el user id
        setPapers(papers.concat(gotPapers));
    }

    return (
        <PapersContext.Provider value={{
            papers,
            setPapers,
        }}>
            {children}
        </PapersContext.Provider>
    )

}