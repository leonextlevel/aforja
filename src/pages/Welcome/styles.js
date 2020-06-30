import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdf5e6',
        paddingHorizontal: 50,
        paddingVertical: 40
    },
    messageTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'center'
    },
    messageContent: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 5
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#477979',
        borderRadius: 15,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,

        elevation: 5,

    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    logoutBtn: {
        backgroundColor: '#ff0000',
        width: 240,
        height: 50,
        position: 'absolute',
        bottom: 20,
        zIndex: 10,
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,

        elevation: 5,
    }
})