import React, {useState} from 'react';
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
import {Fab} from '../components/Fab';
import BtnPrueba from '../components/BtnPrueba';

const {width, height} = Dimensions.get('window');

export const ContadorScreen = () => {
  //const [contador, setContador] = useState(10);
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/img/shipibo-fondo.jpg')}
        style={{
            position:'absolute',
            width,
            height
        }}
        resizeMode='cover'
      />
      <View style={style.containerTitle}>
        <Text style={style.title}>Diccionario Jurídico</Text>
        <Text style={style.subTitle}>
          Corte Superior de Justicia de Ucayali
        </Text>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} />
      </View>
     {/* <ScrollView>
     
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='A' shipibo='Juane'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='B' shipibo='Juane'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='C' shipibo='Juane'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='D' shipibo='Juane'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='E' shipibo='Juane'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='F' shipibo='Juane'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='C' shipibo='Juane'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='D' shipibo='Juane'/>
      </View>
      <View style={style.containerBtn}>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='E' shipibo='Juane'/>
        <BtnPrueba onPress={()=>console.log('Hola mnundo')} abecedario='F' shipibo='Juane'/>
      </View>
     </ScrollView> */}
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
  },
  title: {
    fontSize: 25,
    marginBottom: 5,
    fontFamily: 'Roboto-Bold',
    color:'black'
  },
  subTitle: {
    fontSize: 15,
    color:'black'
  },
  containerBtn: {
    marginTop: 30,
    //backgroundColor:'red',
    width,
    height: (height * 40) / 100,
    //flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop:40,
    justifyContent:'center',
    alignItems:'center'
  },
  title3: {
    color:'black'
  },
  fab: {},
});
