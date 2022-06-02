import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LoginAdminScreen from '../screens/LoginAdminScreen';
import { AuthContext } from '../context/AuthContext';
import LoadingScreen from '../screens/LoadingScreen';
import Lateral from './Lateral';
import { MenuLateralBasico } from './MenuLateral';

const Stack = createStackNavigator();

export const Navigator = () => {


  const { status } = useContext(AuthContext);

  if (status === "checking") return <LoadingScreen></LoadingScreen>

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
        (status !== 'authenticated')
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="LoginAdminScreen" component={LoginAdminScreen} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name="Lateral" component={Lateral} />
            </>
          )
      }

    </Stack.Navigator>
  );
}