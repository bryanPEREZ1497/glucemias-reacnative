import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { Picker } from '@react-native-picker/picker';
import { useForm } from '../hooks/useForm';
import { UsersContext } from '../context/UsersContext';
import { UsersStackParams } from '../navigator/adminExample';


interface Props extends StackScreenProps<UsersStackParams, 'UserScreen'> { }



const UserScreen = ({ navigation, route }: Props) => {




    const { dni = '', name = '', phone = '', role = '', id = '' } = route.params;

    const { _id, _dni, _name, _phone, _password, _role, form, onChange, setFormValue } = useForm({
        _id: id,
        _dni: dni,
        _name: name,
        _phone: phone,
        _password: '****',
        _role: role
    });



    const { loadUserByID, addUser, updateUser, deleteUser } = useContext(UsersContext)


    useEffect(() => {
        navigation.setOptions({
            title: _name ? _name : 'Datos del Usuario'
        })

    }, [_name]);

    useEffect(() => {

        loadUser()

    }, [])

    const loadUser = async () => {
        if (id.length === 0) return;

        const user = await loadUserByID(id);
        setFormValue({
            _id: id,
            _dni: dni,
            _name: user.data.name,
            _phone: user.data.phone,
            _password: user.data.password,
            _role: user.data.roles[0].name
        })
    }

    // const [selectedRol, setSelectedRol] = useState();

    const saveOrUpdate = () => {
        if (name.length > 0) {
            updateUser(id, _dni, _name, _phone, _password, _role)
            console.log(_role)
        } else {

            const tempRole = _role || 'User'
            addUser(id, _dni, _name, _phone, _password, tempRole);
            console.log(_role)
        }saveOrUpdate
    }

    const borrarUser = async() => {
        deleteUser(parseInt(_id));
    }



    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <Text style={styles.label}>Cedula de Identidad / Pasarporte </Text>
                <View style={{ left: 280, bottom: 15, }}>
                    {/* <MaterialIcons name="contacts" size={23} color='#C9C8D4' /> */}
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='1716******'
                    underlineColorAndroid="rgba(0,0,0,0.2)"
                    keyboardType='numeric'
                    value={_dni}
                    onChangeText={(value) => onChange(value, '_dni')}
                >
                </TextInput>
                <Text style={styles.label}>Nombre de Usuario</Text>
                <View style={{ left: 170, bottom: 13, }}>
                    {/* <MaterialIcons name="account-circle" size={23} color='#C9C8D4' /> */}
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Usuario'
                    underlineColorAndroid="rgba(0,0,0,0.2)"
                    value={_name}
                    onChangeText={(value) => onChange(value, '_name')}
                >
                </TextInput>
                <Text style={styles.label}>Numero de Telefono </Text>
                <View style={{ left: 170, bottom: 13, }}>
                    {/* <MaterialIcons name="phone-android" size={23} color='#C9C8D4' /> */}
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='09******'
                    underlineColorAndroid="rgba(0,0,0,0.2)"
                    keyboardType='numeric'
                    value={_phone}
                    onChangeText={(value) => onChange(value, '_phone')}
                >
                </TextInput>
                <Text style={styles.label}>Contraseña</Text>
                <View style={{ left: 170, bottom: 13, }}>
                    {/* <MaterialIcons name="lock" size={23} color='#C9C8D4' /> */}
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='09******'
                    underlineColorAndroid="rgba(0,0,0,0.2)"
                    keyboardType='numeric'
                    value={_password}
                    onChangeText={(value) => onChange(value, '_password')}
                >
                </TextInput>
                <Text style={styles.label}>Rol </Text>
                <View style={{ left: 170, bottom: 13, }}>
                    {/* <MaterialIcons name="supervisor-account" size={23} color='#C9C8D4' /> */}
                </View>

                {/* <Picker
                    selectedValue={_role}
                    onValueChange={(itemValue) =>
                        onChange(itemValue, '_role')
                    }>
                    <Picker.Item label="Usuario" value="User" />
                    <Picker.Item label="Administrador" value="Admin" />
                </Picker> */}



                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => { saveOrUpdate() }}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#66609F',
                            borderRadius: 40,
                            height: 50,
                            width: 120,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ color: '#C9C8D4' }}>Guardar</Text>
                        {/* <MaterialIcons name="save" size={23} color='#C9C8D4' /> */}
                    </TouchableOpacity>
                    <View style={{ width: 30 }}></View>

                    <TouchableOpacity
                        onPress={() => { borrarUser() }}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: '#66609F',
                            borderRadius: 40,
                            height: 50,
                            width: 120,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ color: '#C9C8D4' }}>Eliminar</Text>
                        {/* <MaterialIcons name="save" size={23} color='#C9C8D4' /> */}
                    </TouchableOpacity>
                </View>

                <Text>{JSON.stringify(form, null, 5)}</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
        marginBottom: -10,
        marginTop: 30
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 50,
        marginTop: 5,
        marginBottom: 10
    }

});


export default UserScreen
