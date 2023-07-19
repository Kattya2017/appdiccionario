import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
    return (
        
        <View style={style.container}>
            <Image
        source={require('../assets/img/shipibo-fondo.jpg')} style={{width:'100%',height:'100%', marginTop:-120, position:'absolute',opacity:0.6}} resizeMode="cover"/>
            <Text style={style.title}>
                Diccionario Jurídico
            </Text>
            <Text style={style.title2}>
                Corte Superiro de Justicia de Ucayali
            </Text>
            <Text style={style.title3}>
                Dr. Tullio Bermeo Turchi
            </Text>
            <Text style={style.title3}>
                Presidente
            </Text>
            <Text style={style.title3}>
                Gestión 2023-2024
            </Text>
            <Fab/>
            {/*<TouchableOpacity style={style.fabLocation} onPress={() => setContador(contador + 1)}>
                <View style={style.fab1}>
                    <Text style={style.fabText}>img</Text>
                </View>
            </TouchableOpacity>*/}
        </View>
    )

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color:'black',
        top: -100
    },
    title2:{
        textAlign: 'center',
        fontSize: 20,
        color:'#B60000',
        fontWeight: 'bold',
        top: -95
    },
    title3:{
        textAlign: 'center',
        fontSize: 17,
        color:'black',
        fontWeight:'bold',
        top: 190
    },
    fab:{
        backgroundColor:'#444444',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    }
  })