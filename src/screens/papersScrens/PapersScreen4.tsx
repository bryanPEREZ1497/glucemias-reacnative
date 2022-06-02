import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import { PaperContext } from '../../context/PaperContext';
// import TextInput from 'react-native-text-input-interactive';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFecha } from '../../hooks/useFecha';

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


    // useEffect(() => {
    //     setPaper({
    //         ...paper,
    //         correcion_total: totalCorreciones.toString()
    //     });
    // }, [totalCorreciones])


    return (

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

            <View style={styles.formContainer}>
                <View style={{ right: 40, bottom: 16 }}>
                    <Text style={{ fontSize: 15 }}>      {paper.dia}</Text>
                </View>
                <View style={{ right: 160, bottom: 37 }}>
                    {/* <MaterialIcons name='today' size={23} color='#6F68A6' /> */}
                </View>
                <Text style={styles.titleForm}>Glucemia a la Merienda</Text>
                <View style={styles.input}>
                    <Text>merienda</Text>
                    <TextInput editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='Nivel de Glucosa' value={paper.merienda} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "merienda")} />
                </View>

                <View style={styles.input}>
                    <Text>rapida_ultra_rap_md</Text>
                    <TextInput editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='Insulina Rápida' value={paper.rapida_ultra_rap_md} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "rapida_ultra_rap_md")} />
                </View>

                <View style={styles.input}>
                    <Text>nph_lantus_md</Text>
                    <TextInput editable={!isDisabled} selectTextOnFocus={!isDisabled} placeholder='NPH / Insulina Lenta' value={paper.nph_lantus_md} keyboardType='number-pad' onChangeText={(val) => handleChange(val, "nph_lantus_md")} />
                </View>

                <View>
                    {correccion}
                    <Button disabled={isDisabled}
                        onPress={() => handlePress(1)}
                        title="+"
                        color="#841584"
                    />
                    <Button disabled={isDisabled}
                        onPress={() => handlePress(-1)}
                        title="-"
                        color="#841584"
                    />
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
        marginTop: 45
    },
    titleForm: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginBottom: 30
    }
});

export default PapersScreen4
