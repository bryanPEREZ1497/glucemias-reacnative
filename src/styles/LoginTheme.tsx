import { StyleSheet } from "react-native";


export const loginStyles = StyleSheet.create({

    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 80
    },

    title: {
        color: '#C9C8D4',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5
    },
    label: {
        marginTop: 25,
        color: '#C9C8D4',
        fontWeight: 'bold',
        fontSize: 18
    },
    inputFIeld: {
        color: 'white',
        fontSize: 18,
        bottom:10
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 35,
        bottom:20
    },
    button: {
        borderWidth: 2,
        borderColor: '#C9C8D4',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 20,

    },
    avatarContainer: {
        alignItems: 'center'
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 10,
        marginTop: 20

    },
    menuContainer: {
        marginVertical:30,
        marginHorizontal:30,
        // alignItems:'center',

    },
    menuBoton: {
        marginVertical:10
    },
    menuItem:{
        fontSize:20,
        color:'#C9C8D4'

    }
});