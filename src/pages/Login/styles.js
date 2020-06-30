import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#477979',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff'
    },
    textInput: {
        width: 250,
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
    btnEntrar: {
        backgroundColor: '#5fb867',
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
    }
});