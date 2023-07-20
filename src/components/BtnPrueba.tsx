import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface Props{
    abecedario?:string,
    shipibo?:string,
    onPress?:()=>void
}

const BtnPrueba = ({abecedario,onPress,shipibo}:Props) => {

    let constante;
    let shipi;
    if (abecedario) {
        constante = <Text style={{color:'white'}}>{abecedario}</Text>
    }else{
        constante
    }

    if (shipibo) {
        shipi = <Text style={{color:'white'}}>{shipibo}</Text>
    }else{
        shipi
    }

  return (
    <TouchableOpacity 
        activeOpacity={0.7} 
        style={style.btnDiccionario}
        onPress={onPress}
        
    >
          <Image
            source={require('../assets/img/diccionario.png')}
            style={style.iconoBtn}
          />
          {constante}
          {shipi}
    </TouchableOpacity>
  )
}

export default BtnPrueba;

const style = StyleSheet.create({
    btnDiccionario: {
        backgroundColor: 'blue',
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    
        elevation: 10,
        marginRight:10
      },
      iconoBtn: {
        width: '50%',
        height: '50%',
      },
})