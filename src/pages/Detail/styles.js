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
        paddingHorizontal: 24,
        paddingBottom: 15
    },
    map: {
        flex: 1
    },
    card: {
        paddingHorizontal: 24,
        paddingVertical: 10,
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
        height: 190
    },
    mesaTitle: {
        color: '#000',
        fontSize: 26,
        textTransform: 'uppercase',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    mesaInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mesaProperty: {
        fontWeight: 'bold',
        color: '#477979',
        fontSize: 16
    },
    mesaValue: {
        color: '#477979',
        fontSize: 16
    },
    mesaDescribe: {
        fontSize: 16,
        color: '#477979',
        textAlign: 'center'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: 90,
        height: 80,
        backgroundColor: '#5fb867',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
});