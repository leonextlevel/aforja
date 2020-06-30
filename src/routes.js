import * as React from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthLoading from './pages/AuthLoading';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Mesas from './pages/Mesas';
import Detail from './pages/Detail';
import Create from './pages/Create';
import MapaDetail from './pages/MapaDetail';

import AuthContext from './contexts/AuthContext';

import api from './services/api';

const Stack = createStackNavigator();

export default function Route({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            isLoading: false
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('@Forja:access');

        api.post('api/token/verify/', {
            token: userToken
        }).then((response) => {
            dispatch({ type: 'SIGN_IN', token: userToken });
        }).catch(() => {
            dispatch({ type: 'RESTORE_TOKEN', token: null });
        })
      } catch (e) {
        dispatch({ type: 'SIGN_OUT' });
      }

    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        
        api.post('api/token/', data).then((token) => {
            AsyncStorage.multiSet([
                ['@Forja:access', token.data.access],
                ['@Forja:refresh', token.data.refresh]
            ])
            dispatch({ type: 'SIGN_IN', token: token.data.access });
        }).catch((error => {
            Alert.alert('Não foi possível logar. Verifique suas credenciais!')
        }))
      },
      signOut: () => {
          AsyncStorage.multiRemove([
              '@Forja:access',
              '@Forja:refresh'
          ])
          dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="AuthLoading" component={AuthLoading} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Login',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Mesas" component={Mesas} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="MapaDetail" component={MapaDetail} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}