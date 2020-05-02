import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Create from './pages/Create';
import Mesas from './pages/Mesas';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Mesas" component={Mesas} />
                <AppStack.Screen name="Create" component={Create} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>

    );
}
