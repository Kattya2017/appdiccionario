import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    title:String
}


export const Fab = () => {
  return (
    <TouchableOpacity style={style.fabLocation} onPress={() => console.log('clic')}>
                <View style={style.fab1}>
                    <Text style={style.fabText}>img</Text>
                </View>
            </TouchableOpacity>
  )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'
    },
    fabLocation:{
        position:'absolute',
        alignSelf: 'center',
        top: 410
    },
    fab:{
        backgroundColor:'#444444',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fab1:{
        backgroundColor:'#F1B3B3',
        width: 120,
        height: 120,
        borderRadius:100,
        justifyContent: 'center',
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,
    },
    fabText:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'black',
        alignSelf: 'center'
    }
  })