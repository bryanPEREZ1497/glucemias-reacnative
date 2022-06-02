import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { Usuarios, UsersResponse, UsuarioResponse, RegisterResponse } from '../interfaces/appInterfaces';
import glucemiaApi from '../api/glucemiaApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UsersContextProps = {
    users: Usuarios[];
    loadUsers: () => Promise<void>;
    addUser: (id: string, dni: string, name: string, phone: string, password: string, role: string) => void;
    updateUser: (id: string, dni: string, name: string, phone: string, password: string, role: string) => void;
    deleteUser: (userId: number) => void;
    loadUserByID: (userId: string) => Promise<UsuarioResponse>;
}


export const UsersContext = createContext({} as UsersContextProps);

export const UsersProvider = ({ children }: any) => {

    const [users, setUsers] = useState<Usuarios[]>([]);

    useEffect(() => {
        loadUsers();
    }, [])



    const loadUsers = async () => {

        const token = await AsyncStorage.getItem('token');

        const headers1 = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }

        const resp = await glucemiaApi.get<UsersResponse>('/users', { headers: headers1 });

        setUsers([...resp.data.data]);

    }



    const addUser = async (id: string, dni: string, name: string, phone: string, password: string, role: string) => {
        const token = await AsyncStorage.getItem('token');
        const headers1 = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }

        const resp = await glucemiaApi.post<RegisterResponse>('auth/register',{
            dni: dni,
            name:name,
            phone: phone,
            password:password,
            role: role
        }, 
        { headers: headers1 });
        setUsers([ ...users, resp.data.data])

        return resp.data.data;
    }




    const updateUser = async (id: string, dni: string, name: string, phone: string, password: string, role: string,) => {
        const token = await AsyncStorage.getItem('token');

        const headers1 = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }

       const resp = await glucemiaApi.put(`/users/${id}`, {
        dni: dni,
        name:name,
        phone: phone,
        password:password,
        role: role

       },{headers:headers1})

       setUsers(users.map( user => {
        return (user.id === id) 
        ? resp.data 
        : user
       } ));

    }



    const deleteUser = async (userId: number) => { 

        const token = await AsyncStorage.getItem('token');

        const headers1 = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }

        const resp = await glucemiaApi.delete(`/users/${userId}`)

        return resp.data

    }



    const loadUserByID = async (userId: string): Promise<UsuarioResponse> => {

        const token = await AsyncStorage.getItem('token');

        const headers1 = {
            'Content-Type': 'application/json',
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        }

        const resp = await glucemiaApi.get<UsuarioResponse>(`/users/${userId}`, { headers: headers1 });

        return resp.data

    }





    return (
        <UsersContext.Provider value={{
            users,
            loadUsers,
            addUser,
            updateUser,
            deleteUser,
            loadUserByID

        }}>
            {children}
        </UsersContext.Provider>
    )
}