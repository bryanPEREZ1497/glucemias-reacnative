import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, Keyboard } from 'react-native'
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../styles/LoginTheme';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {




    const { signIn, errorMessage, removeError, token } = useContext(AuthContext);

    const { dni, password, onChange } = useForm({
        dni: '',
        password: ''
    });



    useEffect(() => {
        if (errorMessage.length === 0) return;
        Alert.alert('Error al inicar sesion :(',
            errorMessage,
            [
                {
                    text: 'OK',
                    onPress: removeError
                }
            ]
        )
    }, [errorMessage]);

    const onLogin = () => {
        Keyboard.dismiss();
        signIn({ dni: dni, password: password });
    }


    return (
        <>
            <Background></Background>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >


                <View style={loginStyles.formContainer}>

                    <WhiteLogo></WhiteLogo>
                    <Text style={loginStyles.title}>Bienvenido!</Text>


                    <Text style={loginStyles.label}>CI / Pasarporte </Text>
                    <View style={{left:130, bottom:22,}}>
                        {/* <MaterialIcons name="drive-file-rename-outline" size={20} color='#C9C8D4' /> */}
                    </View>

                    <TextInput
                        placeholder="Numero de Cedula o Pasaporte"
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        underlineColorAndroid="white"
                        style={loginStyles.inputFIeld}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, "dni")}
                        value={dni}
                        onSubmitEditing={onLogin}

                        //onChange, value
                        autoCapitalize="none"
                        autoCorrect={false}
                    ></TextInput>


                    <Text style={loginStyles.label}>Contraseña </Text>
                    <View style={{left:100, bottom:22,}}>
                        {/* <MaterialIcons name="lock" size={20} color='#C9C8D4' /> */}
                    </View>
                    <TextInput
                        placeholder="Ingrese su contraseña"
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        underlineColorAndroid="white"
                        secureTextEntry={true}
                        style={loginStyles.inputFIeld}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, "password")}
                        value={password}
                        onSubmitEditing={onLogin}

                        //onChange, value
                        autoCapitalize="none"
                        autoCorrect={false}
                    ></TextInput>
                    {/* Boton Login */}

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Iniciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Crear una nueva cuenta */}

                 
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen;
