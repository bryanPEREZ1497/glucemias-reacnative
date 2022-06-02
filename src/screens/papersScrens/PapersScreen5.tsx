import React, { useContext, useEffect, useState } from 'react'

import { View, Text, ScrollView, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import { PaperContext } from '../../context/PaperContext';
// import TextInput from 'react-native-text-input-interactive';
import { useFecha } from '../../hooks/useFecha';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

            <View style={styles.formContainer}>
                {/* {pendingPapers
                    && pendingPapers.map((paper) => (
                        (
                            <View>
                                {paper.ayunas}
                            </View>
                        )
                    ))} */}

                <View style={{ right: 40, bottom: 16 }}>
                    <Text style={{ fontSize: 15 }}>      {paper.dia}</Text>
                </View>
                <View style={{ right: 160, bottom: 37 }}>
                    {/* <MaterialIcons name='today' size={23} color='#6F68A6' /> */}
                </View>

                <Text style={styles.titleForm}>Glucemia Dormir</Text>
                <View style={styles.input}>
                    <Text>dormir</Text>
                    <TextInput
                        editable={!isDisabled}
                        selectTextOnFocus={!isDisabled}
                        placeholder='Nivel de Glucosa'
                        value={paper.dormir}
                        keyboardType='number-pad'
                        onChangeText={(value) => handleChange(value, "dormir")} />
                </View>

                <Button
                    onPress={savePaper}
                    title="Guardar mi registros :D"
                    color="#841584"
                    disabled={isDisabled}
                />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    },
    titleForm: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginBottom: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#66609F',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default PapersScreen5
