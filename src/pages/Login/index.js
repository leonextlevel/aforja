import * as React from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';

import AuthContext from '../../contexts/AuthContext';

import styles from './styles';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
            style={styles.textInput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <TouchableOpacity
            style={styles.btnEntrar}
            onPress={() => signIn({ email, password })}
        >
            <Text>Entrar</Text>
        </TouchableOpacity>
      </View>


    );
}


// import React from 'react';

// import styles from './styles';

// class Login extends React.Component {

//     static navigationOptions = {
//         header: null,
//     };

//     render() {
//         <View style={styles.container} key={state}>
//             <Text>Login</Text>

//             <TextInput
//                 placeholder="E-mail"
//                 style={styles.textInput}
//                 placeholderTextColor="#909090"
//                 autoCorrect={false}
//                 maxLength={30}
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//             />
//             <TextInput
//                 style={styles.textInput}
//                 placeholder="Password"
//                 placeholderTextColor="#909090"
//                 autoCorrect={false}
//                 maxLength={30}
//                 secureTextEntry={true}
//                 value={password}
//                 onChangeText={text => setPassword(text)}
//             />
//             <Button onPress={signIn} title="Login" />
//         </View>
//     }
// }







// // import React, { useState } from 'react';
// // import { useNavigation, CommonActions } from '@react-navigation/native';
// // import { View, Text, Button, AsyncStorage, Alert, TextInput, ActivityIndicator } from 'react-native';

// // import PropTypes from 'prop-types'

// // import styles from './styles';

// // import api from '../services/api';

// // export default function Login() {

// //     const navigation = useNavigation();

// //     const [state, setState] = useState(null);
// //     const [error, setError] = useState(null);
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     signIn = async () => {

// //         try {
// //             const response = await api.post('/api/token/', {
// //                 email: email,
// //                 password: password
// //             });
// //             const { access, refresh } = response.data;

// //             await AsyncStorage.multiSet([
// //                 ['@Forja:access', access],
// //                 ['@Forja:refresh', refresh],
// //             ])
            
// //             navigation.dispatch(
// //                 CommonActions.reset({
// //                     index: 0,
// //                     routes: [
// //                         { name: 'Welcome' },
// //                     ],
// //                 })
// //             );

// //             Alert.alert('Logado com sucesso!');
// //         } catch (err) {
// //             setError(err.data);
// //         }
// //     };

// //     return (
// //         <View style={styles.container} key={state}>
// //             <Text>Login</Text>
// //             { !!error && <Text>{ error }</Text>}
// //             <TextInput
// //                 style={styles.textInput}
// //                 placeholder="E-mail"
// //                 placeholderTextColor="#909090"
// //                 autoCorrect={false}
// //                 maxLength={30}
// //                 value={email}
// //                 onChangeText={text => setEmail(text)}
// //             />
// //             <TextInput
// //                 style={styles.textInput}
// //                 placeholder="Password"
// //                 placeholderTextColor="#909090"
// //                 autoCorrect={false}
// //                 maxLength={30}
// //                 secureTextEntry={true}
// //                 value={password}
// //                 onChangeText={text => setPassword(text)}
// //             />
// //             <Button onPress={signIn} title="Login" />
// //         </View>
// //     );
// // }

// // Login.navigationOptions = () => {
// //     return {
// //       header: null,
// //     }
// // }

