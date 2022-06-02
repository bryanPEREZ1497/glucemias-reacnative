import { User, Data, Role } from '../interfaces/appInterfaces';

//como luce

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    roles: Role[] | null;
    errorMessage: string;
    user: User | null;
}


//acciones

export type AuthAction =
    | { type: 'signUp', payload: { token: string, roles: Role[], user: User } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


//reducer

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                roles: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                roles: action.payload.roles,
                user: action.payload.user
            }
        case 'logout':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                roles: null,
                user: null
            }

        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                roles: null,
                user: null
            }

        default:
            return state;
    }
}
