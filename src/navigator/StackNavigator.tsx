import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LetrasScreen } from '../screens/LetrasScreen';
import { PalabraScreen } from '../screens/PalabraScreen';
import { SignificadoScreen } from '../screens/SignificadoScreen';


export type RootStackParams = {
  HomeScreen:undefined,
  LetrasScreen:undefined,
  PalabraScreen:{
    id:number,
    titulo:string,
    titulo_shipibo:string
  }
  SignificadoScreen:{
    id:number,
    titulo:string,
    titulo_shipibo:string,
    descripcion:string,
    descripcion_shipibo:string,
    audio:string,
    id_abecedario:number
  }
  
}

const Stack = createStackNavigator<RootStackParams>();




const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name="HomeScreen" options={{
        headerShown: true,
        headerStyle: {
          height: 55
        },
        headerTitle: 'Bienvenido',
        headerTitleStyle: {
          color: '#006605',
          fontSize: 20,
          fontWeight: '700',
        }
      }} component={HomeScreen} />

      <Stack.Screen name="LetrasScreen" options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#006605',
          height: 55
        },
        headerTitle: 'Diccionario Jurídico CSJUC',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '700'
        }
      }} component={LetrasScreen} />

      <Stack.Screen name="PalabraScreen" options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#006605',
          height: 55
        },
        headerTitle: 'Diccionario Jurídico CSJUC',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '700'
        }
      }} component={PalabraScreen} />

      <Stack.Screen name="SignificadoScreen" options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#006605',
          height: 55
        },
        headerTitle: 'Diccionario Jurídico CSJUC',
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: '700'
        }
      }} component={SignificadoScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;