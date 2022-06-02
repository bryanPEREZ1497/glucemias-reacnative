import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { DrawerContentComponentProps, DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

const CreditosScreen = ({ navigation }:Props ) => {

    useEffect(() => {
           navigation.setOptions({
               headerShown:false,
                headerStyle:{
                    elevation:0
                },
              cardStyle:{
                  backgroundColor:'white'
              }
           })
    }, [])

    return (
        <View>
            <Text>Pantalla de creditos (opcional)</Text>
        </View>
    )
}

export default CreditosScreen
