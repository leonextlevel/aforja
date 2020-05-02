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
        paddingHorizontal: 24,
        flex: 1
    }
});