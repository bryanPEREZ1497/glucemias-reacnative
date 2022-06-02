import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PapersScreen2 from '../screens/papersScrens/PapersScreen2';
import FormScreen from '../screens/papersScrens/FormScreen';
import PaperScreen1 from '../screens/papersScrens/PaperScreen1';
import PapersScreen3 from '../screens/papersScrens/PapersScreen3';
import PapersScreen4 from '../screens/papersScrens/PapersScreen4';
import PapersScreen5 from '../screens/papersScrens/PapersScreen5';
import { Button, Text, useWindowDimensions } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import CalendarComponent from '../components/CalendarComponent';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface Props extends DrawerScreenProps<any, any> { }

const Tab = createMaterialTopTabNavigator();

export const TopNavigator = ({ navigation }: Props) => {

  const { width } = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title='Menu'
          onPress={() => { navigation.toggleDrawer() }}
        ></Button>
      )
    })

  }, [])


  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: width >= 640 ? 12 : 0,  },
        tabBarPressColor:   '#6F68A6',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor:  '#6F68A6',
        },
        tabBarStyle: {
          //en ios es shadowColor:"transparent"
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Ayunas':
              iconName = "wb-sunny";
              break;

            case 'Media Mañana':
              iconName = "breakfast-dining";
              break;

            case 'Almuerzo':
              iconName = "restaurant";
              break;
            case 'Media Tarde':
              iconName = "local-cafe";
              break;
            case 'Cena':
              iconName = "dinner-dining";
              break;
            case 'Dormir':
              iconName = "hotel";
              break;
            case 'Calendario':
              iconName = "hotel";
              break;
          }
          return <Text>xd</Text>
          // return <Icon style={{ color }} name={iconName} size={25}></Icon>;
        },
      })}



      sceneContainerStyle={{
        backgroundColor: 'white',

      }} 
      
    
  
      
    >
    < Tab.Screen name = "Ayunas" component = { FormScreen } />
      <Tab.Screen name="Media Mañana" component={PaperScreen1} />
      <Tab.Screen name="Almuerzo" component={PapersScreen2} />
      <Tab.Screen name="Media Tarde" component={PapersScreen3} />
      <Tab.Screen name="Cena" component={PapersScreen4} />
      <Tab.Screen name="Dormir" component={PapersScreen5} />
      <Tab.Screen name="Calendario" component={CalendarComponent} />
    </Tab.Navigator >
  );
}