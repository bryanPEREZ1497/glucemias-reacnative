import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Pressable, TextInput, } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { PaperContext } from '../../context/PaperContext';
// import TextInput from 'react-native-text-input-interactive';
import { useFecha } from '../../hooks/useFecha';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props extends DrawerScreenProps<any, any> { }

const FormScreen = () => {

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
        <>
            <ScrollView style={{ flex: 1 }}>

                <View style={styles.formContainer}>
                    <View style={{ right: 40, bottom: 16 }}>
                        <Text style={{ fontSize: 15 }}>      {paper.dia}</Text>
                    </View>
                    <View style={{ right: 160, bottom: 37 }}>
                        {/* <MaterialIcons name='today' size={23} color='#6F68A6' /> */}
                    </View>

                    <Text style={styles.titleForm}>Glucemia en Ayunas</Text>
                    <View style={styles.input}>
                        <Text>ayunas</Text>
                        <TextInput 
                        editable={!isDisabled}  
                        selectTextOnFocus={!isDisabled} 
                        placeholder='Nivel de Glucosa' 
                        value={paper.ayunas} 
                        keyboardType='number-pad' 
                        onChangeText={(value) => handleChange(value, "ayunas")} />
                    </View>

                    <View style={styles.input}>
                        <Text>rapida_ultra_rap</Text>
                        <TextInput 
                        editable={!isDisabled}  
                        selectTextOnFocus={!isDisabled} 
                        placeholder='Insulina Rápida' 
                        value={paper.rapida_ultra_rap} 
                        keyboardType='number-pad' 
                        onChangeText={(value) => handleChange(value, "rapida_ultra_rap")} />
                    </View>

                    <View style={styles.input}>
                        <Text>nph_lantus</Text>
                        <TextInput 
                        editable={!isDisabled}  
                        selectTextOnFocus={!isDisabled} 
                        placeholder='NPH / Insulina Lenta' 
                        value={paper.nph_lantus} 
                        keyboardType='number-pad' 
                        onChangeText={(val) => handleChange(val, "nph_lantus")} />
                    </View>

        
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{paddingHorizontal:'5px'}}>Corrección</Text> 
                        <Text style={{paddingHorizontal:'5px'}}>{correccion}</Text>                       
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
        </>
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
        marginTop: -10
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



export default FormScreen
