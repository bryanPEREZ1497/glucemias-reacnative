import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminExample from './adminExample';
import AllPapersScreen from '../screens/papersScrens/AllPapersScreen';
import { Text } from 'react-native';
// import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import SearchUserScreen from '../screens/SearchUserScreen';
import SearchPaperScreen from '../screens/SearchPaperScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator

            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route})=> ({
                headerShown: false,
                tabBarActiveTintColor: '#6F68A6',
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    position:'absolute',
                    // backgroundColor:'rgba(255,255,255,0.92)',
                    // elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginBottom:3,
                },
                tabBarIcon:({color, focused, size}) => {

                    let iconName: string='';

                    switch (route.name) {
                        case 'AdminExample':
                            iconName= 'person'
                            break;
                    
                        case 'AllPapersScreen':
                            iconName= 'description'
                            break;
                        case 'SearchUserScreen':
                            iconName= 'person-search'
                            break;
                        case 'SearchPaperScreen':
                            iconName= 'plagiarism'
                            break;
                    }

                    return <Text>xd</Text>
                }
            })}

        >
            <Tab.Screen name="AdminExample" options={{ title: 'Usuarios' }} component={AdminExample} />
            {/* <Tab.Screen name="SearchUserScreen" options={{ title: 'Busqueda Usuarios' }} component={SearchUserScreen} /> */}
            <Tab.Screen name="AllPapersScreen" options={{ title: 'Hojas' }} component={AllPapersScreen} />
            {/* <Tab.Screen name="SearchPaperScreen" options={{ title: 'Busqueda' }} component={SearchPaperScreen} /> */}
        </Tab.Navigator>
    );
}