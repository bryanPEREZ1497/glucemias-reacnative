import React from 'react'
import { View, Text } from 'react-native'

const Background = () => {
    return (
        <View
            style={{
                position:'absolute',
                backgroundColor:'#66609F',
                width:1000,
                height:1200,
                top:-470,
                transform:[
                    {
                        rotate:'-70deg'
                    }
                ]
            }}
        >

        </View>
    )
}

export default Background
