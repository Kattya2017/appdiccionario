import React, { useEffect, useState } from 'react';
import {Text,TouchableOpacity,View,StyleSheet,Image,Dimensions,ImageBackground} from 'react-native';
import { Resp, ResultPalabra } from '../interface/palabrainterface';
import diccionarioApi from '../api/diccionarioApi';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParams, 'SignificadoScreen'> {};

export const SignificadoScreen = ({route}: Props) => {

    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/img/fondo-abc1.png')}
                style={{
                    position: 'absolute',
                    width,
                    height
                }}
                resizeMode='cover'
            />

            <View style={style.containerTitle}>
                <Text style={style.title}>{route.params.titulo}</Text>
                <Text style={style.title3}>({route.params.titulo_shipibo})</Text>
            </View>

                <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>{route.params.descripcion}</Text>
                </View>

                <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>{route.params.descripcion_shipibo}</Text>
                </View>
          
                <View style={style.containerImg}>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/repro3.png')}/>
                    </TouchableOpacity>
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
        //backgroundColor:'red',
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        marginTop: 20,
    },
    title: {
        fontSize: 40,
        marginBottom: 2,
        fontFamily: 'AkazanRg Bold',
        color: '#378A0A'
    },
    title3: {
        color: '#5B5B5B',
        fontSize: 25,
        fontFamily: 'AkazanRg Bold'
    },
    containerSubTitle: {
        //backgroundColor:'blue',
        width,
        justifyContent: 'center',
        alignItems:'center',
        height: 160,
        marginTop: 15
    },
    subTitle: {
       // backgroundColor:'red',
        fontSize: 20,
       // marginBottom: 3,
        color: 'black',
        textAlign:'center',
        margin:10,
        fontFamily: 'AkazanRg Regular',
        
    },
    containerImg: {
        //backgroundColor:'green',
        width,
        justifyContent: 'center',
        alignItems:'center',
        height: 140,
        marginTop: 20
    },
});