import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContadorScreen } from '../screens/ContadorScreen';
import { HolaMundoScreen } from '../screens/HolaMundoScreen';
import { PalabraScreen } from '../screens/PalabraScreen';
import { SignificadoScreen } from '../screens/SignificadoScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContadorScreen" component={ContadorScreen} />
      <Stack.Screen name="HolaMundoScreen" component={HolaMundoScreen} />
      <Stack.Screen name="PalabraScreen" component={PalabraScreen} />
      <Stack.Screen name="SignificadoScreen" component={SignificadoScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;