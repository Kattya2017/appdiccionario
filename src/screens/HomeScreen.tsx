import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  ImageBackground,
  ScrollView
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation}:Props) => {

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/img/portada-3.png')}
        style={{
          position: 'absolute',
          width,
          height
        }}
        resizeMode='cover'
      />
      <View style={style.containerTitle}>
        {/*<Text style={style.subTitle}>
          Corte Superior de Justicia de Ucayali
        </Text>
        <Text style={style.title}>DICCIONARIO</Text>
      <Text style={style.title}>JURÍDICO</Text>*/}
        <Text style={style.subTitleDicc}>
          Español - Shipibo
        </Text>
      </View>
      
      <View style={style.containerBtn}>
      <TouchableOpacity 
        activeOpacity={0.7} 
        style={style.btnDiccionario} onPress={()=>navigation.navigate('PresentacionScreen')}>
          <Image
            source={require('../assets/img/diccionario2.png')}
            style={style.iconoBtn}
          /> 
    </TouchableOpacity>
      </View>
      <View style={style.containerFooter}>
        <Text style={style.title3}>Dr. Tullio Bermeo Turchi</Text>
        <Text style={style.title3}>Presidente</Text>
        <Text style={style.title3}>Gestión 2023-2024</Text>
      </View>
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
    top:100
  },
  subTitle: {
    fontSize: 20,
    marginBottom:5,
    color: 'black',
    fontFamily: 'AkazanRg Bold'
  },
  title: {
    fontSize: 45,
    //fontFamily: 'AkazanRg Bold',
    color: '#006605',
    fontWeight: '900'
  },
  subTitleDicc: {
    //backgroundColor:'red',
    fontSize: 20,
    marginBottom:-180,
    color:'#C2272D',
    fontWeight:'800'
    //fontFamily: 'AkazanRg Bold'
  },
  containerBtn: {
    marginTop: 70,
    //backgroundColor:'red',
    width,
    height: (height * 40) / 100,
    //flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:150
  },
  btnDiccionario: {
    //backgroundColor: '#fff',
   // borderColor:'#059A32',
    //borderWidth:2,
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  iconoBtn: {
    width: '120%',
    height: '120%',
  },
  containerFooter: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top:100
  },
  title3: {
    color: 'black',
    fontSize:16,
    fontWeight: 'bold'
    //fontFamily: 'AkazanRg Bold'
  },
  fab: {},
});
