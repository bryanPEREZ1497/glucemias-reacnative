import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity, Button, Text } from 'react-native';
import { loginStyles } from '../styles/LoginTheme';
// import Icon from 'react-native-vector-icons/Ionicons';
import UserScreen from '../screens/UserScreen';
import UsersScreen from '../screens/UsersScreen';
import { AuthContext } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import Lateral from './Lateral';
import CreditosScreen from '../screens/CreditosScreen';
import { BottomTabsNavigator } from './BottomTabsNavigator';


const Drawer = createDrawerNavigator();

export const MenuLateralAdmin = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown:false,
        // title:'Lista de Usuario',
        drawerStyle:{backgroundColor:'#66609F'},
        
        headerStyle: {
          elevation: 0,
          backgroundColor: '#514a97',
        },
        

      }}
      drawerContent={(props) => <MenuInterno {...props}></MenuInterno>}
    >
      <Drawer.Screen name="BottomTabsNavigator" options={{title:'Usuarios'}} component={BottomTabsNavigator} />
      <Drawer.Screen name="CreditosScreen" component={CreditosScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  const { logOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={loginStyles.avatarContainer}>
        <Image
         source={require('../assets/onlyLogo.png')}
          style={loginStyles.avatar}
        ></Image>
      </View>

      {/* Opciones de menu */}

      <View style={loginStyles.menuContainer}>
        <TouchableOpacity
          style={{
            ...loginStyles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Lateral')}
        >
          {/* <Icon name="create" size={23} color="black"></Icon> */}
          <Text style={loginStyles.menuItem}> Dashboard </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            ...loginStyles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('UserScreen')}
        >
          <Icon name="code-slash" size={23} color="black"></Icon>
          <Text style={loginStyles.menuItem}>    Agregar un nuevo usuario</Text>
        </TouchableOpacity> */}

        <Button
          title='Cerrar Sesion'
          onPress={logOut}
        ></Button>

      </View>

    </DrawerContentScrollView>


  )
}