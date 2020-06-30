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
    content: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 16,
    },
    mesa: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        elevation: 5,
    },
    mesaHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mesaContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mesaTitle: {
        color: '#477979',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase'
    },
    cardVagas: {
        backgroundColor: '#009900',
        padding: 5,
        height: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtVagas: {
        color: '#fff',
        fontWeight: 'bold',
    },
    numVagas: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    }
});