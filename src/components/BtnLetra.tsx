import React from 'react'

import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props{
    palabrita?:string,
    onPress?:()=>void
}

const BtnLetra = ({palabrita, onPress}:Props) =>{

let palabra;

if (palabrita) {
    palabra = <Text style={{color:'black', fontSize:20, fontFamily:'AkazanRg Bold', marginTop:5}}>{palabrita}</Text>
}else{
    palabra
}

return (
    <TouchableOpacity 
        activeOpacity={0.7} 
        style={style.btnDiccionario}
        onPress={onPress}>
          <Image
            source={require('../assets/img/libro.png')}
            style={style.iconoBtn}
          />
          {palabrita}
    </TouchableOpacity>
)
}

export default BtnLetra;

const style = StyleSheet.create({
    btnDiccionario: {
        backgroundColor: '#F5F5F2',
        borderColor:'#006605',
        borderWidth:3,
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
        width: '40%',
        height: '40%',
      },
})
