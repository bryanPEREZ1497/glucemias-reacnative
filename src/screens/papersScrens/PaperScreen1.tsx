import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import TextInput from 'react-native-text-input-interactive';
import { ScrollView } from 'react-native-gesture-handler';
import { PaperContext } from '../../context/PaperContext';
import { useFecha } from '../../hooks/useFecha';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const PaperScreen1 = () => {


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
        <ScrollView style={{ flex: 1 }}>

            <View style={styles.formContainer}>
                <View style={{ right: 40, bottom: 16 }}>
                    <Text style={{ fontSize: 15 }}>      {paper.dia}</Text>
                </View>
                <View style={{ right: 160, bottom: 37 }}>
                    {/* <MaterialIcons name='today' size={23} color='#6F68A6' /> */}
                </View>
                <Text style={styles.titleForm}>Glucemia a la Media Mañana</Text>
                <View style={styles.input}>
                    <Text>media_manana</Text>
                    <TextInput editable={!isDisabled}  selectTextOnFocus={!isDisabled} placeholder='Nivel de Glucosa' value={paper.media_manana} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "media_manana")} />
                </View>

                <View style={styles.input}>
                    <Text>rapida_ultra_rap_m</Text>
                    <TextInput editable={!isDisabled}  selectTextOnFocus={!isDisabled} placeholder='Insulina Rápida' value={paper.rapida_ultra_rap_m} keyboardType='number-pad' onChangeText={(value) => handleChange(value, "rapida_ultra_rap_m")} />
                </View>
                
                 <View>
                        {correccion}
                        <Button   disabled={isDisabled}
                            onPress={() => handlePress(1)}
                            title="+"
                            color="#841584"
                        />
                        <Button   disabled={isDisabled}
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
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 30
    }
});


export default PaperScreen1
