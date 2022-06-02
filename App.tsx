import 'react-native-gesture-handler';
import React from 'react'
import { Navigator } from './src/navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateralBasico } from './src/navigator/MenuLateral';
import { LogBox } from 'react-native';
import { UsersProvider } from './src/context/UsersContext';
import { PaperProvider } from './src/context/PaperContext';
import { PapersProvider } from './src/context/PapersContext';
LogBox.ignoreLogs(['Reanimated 2']);



const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <PapersProvider>
          <PaperProvider>
            {children}
          </PaperProvider>
        </PapersProvider>
      </UsersProvider>
    </AuthProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator></Navigator>
        {/* <MenuLateralBasico></MenuLateralBasico> */}
      </AppState>
    </NavigationContainer>
  )
}

export default App