import React from 'react'
import { View, Text, Image } from 'react-native'

const WhiteLogo = () => {
    return (
        <View style={{
            alignItems:'center',

        }}>
            <Image
                source={require('../assets/LOGO_FUNDACION_DIABETES_JUVENIL_ECUADOR_2p.png')}
                style={{
                    width: 300,
                    height:130,
                    
                }}
            ></Image>
        </View>
    )
}

export default WhiteLogo
