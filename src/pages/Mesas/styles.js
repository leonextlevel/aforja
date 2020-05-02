import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#707070'
    },
    header: {
        backgroundColor: '#505050',
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
        paddingHorizontal: 24,
        marginTop: 16,
    },
    mesa: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#808080',
        marginBottom: 16,
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
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase'
    },
    mesaColumn1: {
        alignItems: 'flex-start'
    },
    mesaColumn2: {
        alignItems: 'flex-end'
    },
    mesaProperty: {
        fontSize: 18,
        color: '#EEEEEE',
        fontWeight: 'bold'
    },
    mesaValue: {
        color: '#FFF',
        marginBottom: 8,
    },
    mesaOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    detailsButton: {
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: '#456732',
        borderRadius: 8
    },
    detailsText: {
        padding: 8
    }
});