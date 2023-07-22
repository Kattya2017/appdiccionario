import React from 'react';

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
import BtnLetra from '../components/BtnLetra';

const { width, height } = Dimensions.get('window');

export const SignificadoScreen = () => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/img/fondo-abc.png')}
                style={{
                    position: 'absolute',
                    width,
                    height
                }}
                resizeMode='cover'
            />

            <View style={style.containerTitle}>
                <Text style={style.title}>Abandono de acción</Text>
                <Text style={style.title3}>(shipibo)</Text>
            </View>

            <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>El actor -según Escriche- que después de contestada la 
                    demanda desampara su acción, ausentándose o no compareciendo en el tribunal, puede 
                    ser compelido por el juez, mediante petición a proseguirla; y en caso de que no la 
                    prosiga, debe el juez absolver al demandado de la instancia y condenar al actor en 
                    las costas y daños que hubiere causado.</Text>
            </View>

            <View style={style.containerSubTitle}>
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
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginTop: 80,
    },
    title: {
        fontSize: 30,
        marginBottom: 2,
        fontFamily: 'AkazanRg Bold',
        color: '#378A0A'
    },
    containerSubTitle: {
       //backgroundColor:'red',
        width,
        justifyContent: 'center',
        alignItems:'center',
        height: 180,
        marginTop: 25
    },
    subTitle: {
        //backgroundColor: 'blue',
        fontSize: 20,
        marginBottom: 3,
        color: 'black',
        textAlign:'center',
        margin:3,
        //justifyContent:'center',
        //alignItems:'center',
        fontFamily: 'AkazanRg Regular'
    },
    containerBtn: {
        marginTop: 20,
        //backgroundColor:'red',
        width,
        height: (height * 20) / 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 60
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
    /*containerFooter: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        top: 100
    },*/
    title3: {
        color: '#5B5B5B',
        fontSize: 20,
        fontFamily: 'AkazanRg Bold'
    },
});