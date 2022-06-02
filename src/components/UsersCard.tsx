import React from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Usuarios } from '../interfaces/appInterfaces';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface Props {
    usuario: Usuarios;
}

const UsersCard = ({usuario}: Props) => {
   
   const navigation = useNavigation();

    return (
        <Text>xd</Text>
    )
}

export default UsersCard
