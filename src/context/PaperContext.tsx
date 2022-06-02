import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useReducer, useState } from 'react'
import { Paper, PaperResponse, PaperStoreResponse } from '../interfaces/appInterfaces';
import glucemiaApi from '../api/glucemiaApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFecha } from '../hooks/useFecha';
import getUser from "../helpers/getUserFromStorage";
import { inicialState } from "../interfaces/appInterfaces";
import { PapersContext } from '../context/PapersContext';

type PaperContextProps = {
    pendingPapers: {};
    paper: Paper;
    isDisabled: boolean;
    setIsDisabled:Dispatch<SetStateAction<boolean>>;
    totalCorreciones: number;
    storePaper: () => void
    setPaper: Dispatch<SetStateAction<Paper>>
    setTotalCorreciones: Dispatch<SetStateAction<number>>
}

export const PaperContext = createContext({} as PaperContextProps)


export const PaperProvider = ({ children }: any) => {

    const { papers,setPapers } = useContext(PapersContext);

    const [paper, setPaper] = useState<Paper>(inicialState);
    
    const [totalCorreciones, setTotalCorreciones] = useState<number>(0);
    
    const [pendingPapers, setPendingPapers] = useState<{ [key: string]: {} }>({});
    
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        saveInStorage();
    }, [paper])

    useEffect(() => {
        setPaper({
            ...paper,
            correcion_total: totalCorreciones.toString()
        });
    }, [totalCorreciones])

    useEffect(() => {
        getUser()
            .then(user => {
                setPaper({
                    ...paper,
                    user_id: user.id
                })
            })
            .catch(
                e => console.log('Error al obtener usuario en storage', e)
            )
    }, []);

    const saveInStorage = async () => {
        try {
            const {id,name,...payload} = paper;
            await AsyncStorage.setItem('paper', JSON.stringify(payload, null, 5));
            console.log('Cambios guardados en storage');
        } catch (error) {
            console.log('No se pudo guardar en storage',error);
        }
    }
    
    const storePaper = async () => {
        
        const token = await AsyncStorage.getItem('token');
        
        glucemiaApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        try {
            const {id,name,...payload} = paper;

            await glucemiaApi.post<any>(
                '/papers',
                payload
                );
                console.log('Guardado en la BD con éxito!');
                setPapers(papers.concat(paper));
                setIsDisabled(true);
                
            } catch (error) {
                console.log('El registro no se pudo guardar en la base de datos',error)
            }
        }
        
        return (
            <PaperContext.Provider value={{
                paper,
                pendingPapers,
                storePaper,
                isDisabled,
                setIsDisabled,
                setPaper,
                totalCorreciones,
                setTotalCorreciones
                
            }}>
            {children}
        </PaperContext.Provider>
    )
}
// const esManana = () => {
    //     const date = new Date();
    //     return today !== date.getDate().toString();
    // }
    
    
    // if (esManana()) {
    //     await AsyncStorage.removeItem('paper');
    //     setPaper(inicialState);
    //     return;
    // }