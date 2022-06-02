import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import UsersScreen from '../screens/UsersScreen';
import UserScreen from '../screens/UserScreen';

export type UsersStackParams = {
  UsersScreen: undefined,
  UserScreen: {id?: string, dni?: string, name?:string, phone?:string,  role?: string}
}


const Stack = createStackNavigator<UsersStackParams>();

const AdminExample = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:'white'
                },
                headerStyle:{
                    elevation:0,
                    shadowColor:'transparent'
                }
            }}
        
        >
            <Stack.Screen
                name="UsersScreen"
                component={UsersScreen}
                options={{title: 'Usuarios'}}
            ></Stack.Screen>


            <Stack.Screen
                name="UserScreen"
                component={UserScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AdminExample
