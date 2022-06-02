import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'


interface Props extends StackScreenProps<any, any> { }

const DashboardAdminScreen = ({navigation}: Props) => {

   

    return (
        <View>
            <Text>DashboardAdminScreen works</Text>
        </View>
    )
}

export default DashboardAdminScreen
