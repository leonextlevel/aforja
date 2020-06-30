import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdf5e6'
    },
    header: {
        backgroundColor: '#477979',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 5
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    form: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginTop: 15
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 3,
        marginBottom: 15,
        height: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputRow: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 3,
        marginBottom: 15,
        height: 40,
        width: 150
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    buttonMapa: {
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 3,
    },
    buttonMapaText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000'
    },
    buttonCreate: {
        backgroundColor: '#5fb867',
        position: 'absolute',
        bottom: 20,
        zIndex: 5,
        alignSelf: 'center',
        borderRadius: 15,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 3
    },
    buttonCreateText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})