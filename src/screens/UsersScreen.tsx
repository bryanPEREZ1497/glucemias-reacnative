import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { UsersContext } from '../context/UsersContext';
import { UsersStackParams } from '../navigator/adminExample';
import SearchInput from '../components/SearchInput';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<UsersStackParams, 'UsersScreen'> { }


export const UsersScreen = ({ navigation }: Props) => {

    const { users, loadUsers } = useContext(UsersContext);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { logOut } = useContext(AuthContext);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('UserScreen', {})}
                >
                    <Text>Nuevo Usuario    </Text>
                </TouchableOpacity>
            )
        })
    }, [])

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsersFromBack = async () => {
        setIsRefreshing(true);
        await loadUsers();
        setIsRefreshing(false);

    }



    return (
        <View style={{ flex: 1, marginHorizontal: 15 }}>
        <Button
          title='Cerrar Sesion'
          onPress={logOut}
        ></Button>
            <FlatList
                data={users}
                ListHeaderComponent={<SearchInput></SearchInput>}
                keyExtractor={(user, index) => {
                    return user.id || user.dni
                }}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={styles.item}
                            onPress={
                                () => navigation.navigate('UserScreen', {
                                    id: item.id,
                                    dni: item.dni,
                                    name: item.name,
                                    phone: item.phone,
                                })}
                        >
                            <View style={styles.icon}>
                                {/* <MaterialIcons name='person' size={23} color='#6F68A6' /> */}
                            </View>
                            <Text style={{ bottom: 10 }}>{item.name} {item.dni}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                // ItemSeparatorComponent={() => (
                //     <View style={styles.itemSeparator}></View>
                // )}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={loadUsersFromBack}
                    >

                    </RefreshControl>
                }

            >

            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    userName: {
        fontSize: 20
    },
    itemSeparator: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        marginVertical: 5
    },
    item: {
        borderColor: '#66609F',
        // backgroundColor:'red',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingLeft: 50,
        justifyContent: 'center',
    },
    icon: {
        right: 30,
        top: 9
    }
})


export default UsersScreen
