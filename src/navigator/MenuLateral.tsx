import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Navigator } from './navigator';
import CreditosScreen from '../screens/CreditosScreen';
import FormScreen from '../screens/papersScrens/FormScreen';
import { View, Image, TouchableOpacity, Button, Text } from 'react-native';
import { loginStyles } from '../styles/LoginTheme';
// import Icon from 'react-native-vector-icons/Ionicons';
import { TopNavigator } from './TopNavigator';
import { AuthContext } from '../context/AuthContext';
import AgendaComponent from '../components/AgendaComponent';
import CalendarComponent from '../components/CalendarComponent';
import TabBar from '../components/TabBar';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {


  return (
    <Drawer.Navigator

      screenOptions={{
        headerShown: false,
        drawerStyle:{backgroundColor:'#66609F'},
        headerStyle: {
          elevation: 0,
          backgroundColor: '#514a97',
        },

      }}
      drawerContent={(props) => <MenuInterno {...props}></MenuInterno>}
    >
      <Drawer.Screen name="Dashboard" component={TopNavigator} />
      <Drawer.Screen name="CreditosScreen" component={CreditosScreen} />
      <Drawer.Screen name="Calendario" component={CalendarComponent} />
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
          onPress={() => navigation.navigate('Dashboard')}
        >
          {/* <Icon name="create" size={23} color="#C9C8D4"></Icon> */}
          <Text style={loginStyles.menuItem}>   Hoja Glucemia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...loginStyles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('CreditosScreen')}
        >
          {/* <Icon name="code-slash" size={23} color="#C9C8D4"></Icon> */}
          <Text style={loginStyles.menuItem}>    Creditos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...loginStyles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Calendario')}
        >
          {/* <Icon name="code-slash" size={23} color="#C9C8D4"></Icon> */}
          <Text style={loginStyles.menuItem}>    Calendario</Text>
        </TouchableOpacity>

        <Button
          title='Cerrar Sesion'
          onPress={logOut}
        ></Button>

      </View>

    </DrawerContentScrollView>


  )
}