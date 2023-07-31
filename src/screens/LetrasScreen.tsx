import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, ScrollView} from 'react-native';
import BtnPrueba from '../components/BtnPrueba';
import { StackScreenProps } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

export const LetrasScreen = ({navigation}:any) => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/img/shipibo-fondo.jpg')}
        style={{
          position: 'absolute',
          width:'100%',
          height:height+200, marginTop:-120, opacity:0.6
        }}
        resizeMode='cover'
      />
      <ScrollView>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>navigation.navigate('PalabraScreen')} abecedario='A' shipibo='(arbol)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='B' shipibo='(bote)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='C' shipibo='(cama)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='D' shipibo='(dado)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='E' shipibo='(enano)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='F' shipibo='(foco)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='G' shipibo='(gato)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='H' shipibo='(humo)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='I' shipibo='(isla)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='J' shipibo='(jarra)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='K' shipibo='(kilos)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='L' shipibo='(lana)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='M' shipibo='(mamá)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='N' shipibo='(nido)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='O' shipibo='(oso)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='P' shipibo='(pan)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='Q' shipibo='(queso)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='R' shipibo='(roca)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='S' shipibo='(sartén)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='T' shipibo='(taza)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='U' shipibo='(uva)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='V' shipibo='(vino)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='W' shipibo='(wifi)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='X' shipibo='(xilófono)'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='Y' shipibo='(yuca)'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='Z' shipibo='(zapato)'/>
      </View>
     </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerTitle: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: 60,
    top:120
  },
  title: {
    fontSize: 55,
    marginBottom: 2,
    fontFamily: 'AkazanRg Bold',
    color: '#006605'
  },
  subTitle: {
    fontSize: 20,
    marginBottom:5,
    color: 'black',
    fontFamily: 'AkazanRg Regular'
  },
  containerBtn: {
    marginTop: 20,
    //backgroundColor:'red',
    width,
    height: (height * 20) / 100,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:10
  },
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
  },
  iconoBtn: {
    width: '50%',
    height: '50%',
  },
  containerFooter: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    top:100
  },
  title3: {
    color: 'black',
    fontSize:20,
    fontFamily: 'AkazanRg Regular'
  },
});
