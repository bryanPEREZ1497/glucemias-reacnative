import React, { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { User, LoginData, RegisterData, LoginResponse, RegisterResponse, Data, Role } from '../interfaces/appInterfaces';
import { AuthState, authReducer } from './AuthReducer';
import glucemiaApi from '../api/glucemiaApi';
import AsyncStorage from '@react-native-async-storage/async-storage';



//como luce la informacion

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: User | null;
    roles: Role[] | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (RegisterData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

//estado inical

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    roles: null,
    user: null,
    errorMessage: ''
}


//Contexto


export const AuthContext = createContext({} as AuthContextProps);

//Proveedor de la informacion

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState);

    useEffect(() => {
       checkToken();
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');
        const roles1 = await AsyncStorage.getItem('roles');


        if (!token) {
            return dispatch({ type: 'notAuthenticated' });
        } else{

            dispatch({ type: 'signUp', payload: { token: token, roles: JSON.parse(roles1 as string), user: JSON.parse(user as string) } });
        }

    }


    const signIn = async ({ dni, password }: LoginData) => {

        const headers = {
            'Content-Type': 'application/json',
            Accept: "*/*",
        }

        try {
            const resp = await glucemiaApi.post<LoginResponse>('/auth/login', { dni, password }, { headers: headers });
            dispatch({ type: 'signUp', payload: { token: resp.data.token, roles: resp.data.data.user.roles , user: resp.data.data.user } })

            //guardando token en storage del dispositivo

            await AsyncStorage.setItem('token', resp.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(resp.data.data.user, null, 5));
            await AsyncStorage.setItem('roles', JSON.stringify(resp.data.data.user.roles, null, 5));

        } catch (error: any) {
            console.log(error.response.data.message);
            dispatch({ type: 'addError', payload: error.response.data.message || 'Informacion Incorrecta!!' })

        }



    }

    const signUp = async ({ dni, name, password, phone, role }: RegisterData) => {
        const headers2 = {
            'Content-Type': 'application/json',
            // "Content-Type": "application/x-www-form-urlencoded",
            Accept: "*/*",
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip,deflate,br'
        };
        try {
            const { data } = await glucemiaApi.post<RegisterResponse>('/auth/register', { dni, name, password, phone, role }, { headers: headers2 });
            dispatch({ type: 'signUp', payload: { token: data.token, roles: data.data.user.roles, user: data.data.user } });

            //guardado en el storage

            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('user', JSON.stringify(data.data.user, null, 5));
            await AsyncStorage.setItem('roles', JSON.stringify(data.data.user.roles, null, 5));


        } catch (error: any) {
            console.log(error);
            dispatch({ type: 'addError', payload: error.response.data.message || 'Revise la informacion!!' })

        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('roles');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' })
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
            signUp

        }}>
            {children}
        </AuthContext.Provider>
    )


}