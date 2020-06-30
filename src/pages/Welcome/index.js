import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthContext from '../../contexts/AuthContext';

import styles from './styles';

export default function Welcome() {
    const { signOut } = React.useContext(AuthContext);

    const navigation = useNavigation();

    function navigateToMesas() {
        navigation.navigate('Mesas');
    }

    function navigateToCreate() {
        navigation.navigate('Create');
    }
  
    return (
        <View style={styles.container}>
            <Text style={styles.messageTitle}>BEM-VINDO, AVENTUREIRO!</Text>
            <Text style={styles.messageContent}>
                A forja é onde o multiverso se encontra, onde universos nascem e morrem a todo momento. Aqui você terá todo
                poder para criá-los ou fazer parte de um existente, a escolha é sua!
            </Text>
            <Text style={styles.messageContent}>
                Caso deseje entrar em um existente, caberá ao artífice responsável pelo mundo decidir se o considera digno
                de tal.
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToCreate}
                >
                    <Text style={styles.buttonText}>Criar Mundo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToMesas}
                >
                    <Text style={styles.buttonText}>Ver Mundos</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.logoutBtn}
                onPress={signOut}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

        </View>
    );
}

// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

// import styles from './styles';

// export default function Welcome() {

//     const navigation = useNavigation();

//     const logout = () => {
//         AsyncStorage.multiRemove(['@Forja:access', '@Forja:refresh']);
//         navigation.goBack()
//     }

//     function navigateToMesas() {
//         navigation.navigate('Mesas');
//     }

//     function navigateToCreate() {
//         navigation.navigate('Create');
//     }

//     return (

//     );
// }
