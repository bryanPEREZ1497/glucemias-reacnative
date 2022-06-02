import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
// import { MenuLateralAdmin } from './MenuLateralAdmin';
import { MenuLateralBasico } from './MenuLateral';
import { Role } from '../interfaces/appInterfaces';
import { MenuLateralAdmin } from './MenuLateralAdmin';





const Stack = createStackNavigator();

const Lateral = () => {

    const { user, token, logOut, roles } = useContext(AuthContext);

    const extractRoleName = (roles: Role[]) => {
        const roleNames: string[] = [];
        roles.forEach(role => {
            roleNames.push(role.name);
        })
        return roleNames;
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: { elevation: 0, },
                cardStyle: {
                    elevation: 0
                }
            }}
        >
            {
                roles && extractRoleName(roles).includes('Admin')
                    ? <Stack.Screen name="MenuLateralAdmin" component={MenuLateralAdmin}></Stack.Screen>
                    : <Stack.Screen name="MenuLateralBasico" component={MenuLateralBasico}></Stack.Screen>
            }
        </Stack.Navigator>
    );
}

export default Lateral
