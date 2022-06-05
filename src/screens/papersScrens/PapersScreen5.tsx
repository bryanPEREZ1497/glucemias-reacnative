import React, { useContext, useEffect, useState } from 'react'

import { View, Text, ScrollView, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import { PaperContext } from '../../context/PaperContext';
import { useFecha } from '../../hooks/useFecha';
import Icon from 'react-native-vector-icons/Ionicons';

const PapersScreen5 = () => {

    const {
        pendingPapers,
        paper,
        isDisabled,
        setPaper,
        storePaper,
    } = useContext(PaperContext);

    const { fechaActual } = useFecha();

    const handleChange = async (value: string, field: string) => {
        if (value === "") {
            value = "0";
        }

        setPaper({
            ...paper,
            [field]: value
        });
    }

    const savePaper = async () => {
        storePaper();
    }

    return (


        <ScrollView style={{ flex: 1 }}>

            <View style={{ marginTop: 20, position: 'relative' }}>
                <Icon style={{ position: 'absolute' }} name={'calendar'} size={20}></Icon>
                <Text style={{ fontSize: 15, marginLeft: 26 }}>{paper.dia}</Text>
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.titleForm}>Glucemia Dormir</Text>
                <View style={styles.formItem}>

                    <TextInput
                        editable={!isDisabled}
                        style={styles.input}
                        selectTextOnFocus={!isDisabled}
                        placeholder='Nivel de Glucosa'
                        value={paper.dormir}
                        keyboardType='number-pad'
                        onChangeText={(value) => handleChange(value, "dormir")} />
                </View>


                <Pressable disabled={isDisabled}
                    style={styles.button}
                    onPress={savePaper}>
                        <Icon style={{ color: 'white', fontSize: 34 }} name={'save'} size={20}></Icon>
                </Pressable>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        borderColor: 'grey',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        paddingVertical: 40,
        paddingHorizontal: 40,


    },
    titleForm: {
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -10
    },
    input: {
        height: 40,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 35,
        backgroundColor: '#66609F',
        margin: '5px',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    formItem: {
        marginBottom: 20
    },
});

export default PapersScreen5
