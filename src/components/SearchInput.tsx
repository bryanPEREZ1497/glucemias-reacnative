import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { UsersContext } from '../context/UsersContext';


const SearchInput = () => {


    const [textValue, setTextValue] = useState('')


   

    return (
        <View style={styles.container}>

            <View style={styles.textBackground}>

                <TextInput
                    placeholder='Buscar usuario'
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                ></TextInput>
                {/* <MaterialIcons name='search' size={23} color='grey' /> */}

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
});
export default SearchInput
