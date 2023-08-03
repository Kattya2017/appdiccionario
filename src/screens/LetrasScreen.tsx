import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, ScrollView} from 'react-native';
import BtnPrueba from '../components/BtnPrueba';
import { StackScreenProps } from '@react-navigation/stack';
import diccionarioApi from '../api/diccionarioApi';
import { Resp, ResultAbecedario } from '../interface/abecedariointerface';
import { Container, Row, Col } from 'react-native-flex-grid';
import { RootStackParams } from '../navigator/StackNavigator';
const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParams, 'LetrasScreen'>{};

export const LetrasScreen = ({navigation}:Props) => {

  const [listAbecedario, setListAbecedario] = useState<Resp[]>([]);

  useEffect(() => {
    mostrarAbecedario();
    //console.log('hola muundo');
    
  }, [])
  

  const mostrarAbecedario =async()=>{
    try {
      const resp = await diccionarioApi.get<ResultAbecedario>('/abecedario',{params:{estado:1}});
      console.log(resp.data);
      setListAbecedario(resp.data.resp);
      console.log(listAbecedario);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


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
      <Row style={{padding:20}}>
        {
          listAbecedario.map((resp,index)=>{
            return (
              <Col 
                key={resp.id}
                xs="6" 
                sm="6"
                style={{
                  marginBottom:15
                }}
                >
                <BtnPrueba 
                  onPress={()=>navigation.navigate('PalabraScreen',{id:resp.id, titulo:resp.titulo,titulo_shipibo:resp.titulo_shipibo})} 
                  abecedario={resp.abecedario} 
                  shipibo={`(${resp.abecedario_shipibo})`}/>
              </Col>
            )
          })
        }
      </Row>
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
    //padding:25,
    //backgroundColor:'red',
    width,
    //flexDirection:'row',
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
