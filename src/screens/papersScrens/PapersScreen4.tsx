import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { PaperContext } from '../../context/PaperContext';
// import TextInput from 'react-native-text-input-interactive';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFecha } from '../../hooks/useFecha';
import Icon from 'react-native-vector-icons/Ionicons';

export const PapersScreen4 = () => {


    const [correccion, setCorreccion] = useState(0);
    const {
        paper,
        setPaper,
        isDisabled,
        totalCorreciones,
        setTotalCorreciones
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

    const handlePress = (value: number) => {
        if (correccion === 0 && value === -1) {
            return;
        }
        setCorreccion(correccion + value);
        setTotalCorreciones(totalCorreciones + value)

    }





    return (

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 20, position: 'relative' }}>
                <Icon style={{ position: 'absolute' }} name={'calendar'} size={20}></Icon>
                <Text style={{ fontSize: 15, marginLeft: 26 }}>{paper.dia}</Text>
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.titleForm}>Glucemia a la Merienda</Text>
                <View style={styles.formItem}>
                    <Text>Merienda</Text>
                    <TextInput style={styles.input}
                        editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='Nivel de Glucosa' value={paper.merienda} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "merienda")} />
                </View>

                <View style={styles.formItem}>

                    <Text>Rápida/Ultra rápida</Text>
                    <TextInput
                        style={styles.input}
                        editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='Insulina Rápida' value={paper.rapida_ultra_rap_md} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "rapida_ultra_rap_md")} />
                </View>

                <View style={styles.formItem}>

                    <Text>Lenta</Text>
                    <TextInput
                        style={styles.input}
                        editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='NPH / Insulina Lenta' value={paper.nph_lantus_md} keyboardType='number-pad' onChangeText={(val) => handleChange(val, "nph_lantus_md")} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ paddingHorizontal: '5px' }}>Corrección</Text>
                    <Text style={{ paddingHorizontal: '5px', marginEnd: '5px' }}>{correccion}</Text>

                    <Pressable disabled={isDisabled}
                        style={styles.button}
                        onPress={() => handlePress(+1)}>
                        <Text style={{ color: 'white', fontSize: 14 }}>+</Text>
                    </Pressable>
                    <Pressable disabled={isDisabled}
                        style={styles.button}
                        onPress={() => handlePress(-1)}>
                        <Text style={{ color: 'white', fontSize: 14 }}>-</Text>
                    </Pressable>
                </View>
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
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 30,
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
    }
});


export default PapersScreen4
