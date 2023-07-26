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

const { width, height } = Dimensions.get('window');

export const SignificadoScreen = () => {
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
                <Text style={style.title}>Abandono de acción</Text>
                <Text style={style.title3}>(shipibo)</Text>
            </View>

            <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>Que después de contestada la 
                    demanda desampara su acción, ausentándose o no compareciendo en el tribunal, puede 
                    ser compelido por el juez, mediante petición a proseguirla; y en caso de que no la 
                    prosiga, debe el juez absolver al demandado de la instancia y condenar al actor en 
                    las costas y daños que hubiere causado.</Text>
            </View>

            <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>El actor -según Escriche- que después de contestada la 
                    demanda desampara su acción, ausentándose o no compareciendo en el tribunal, puede 
                    ser compelido por el juez, mediante petición a proseguirla; y en caso de que no la 
                    prosiga, debe el juez absolver al demandado de la instancia y condenar al actor en 
                    las costas y daños que hubiere causado.</Text>
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
        //backgroundColor:'red',
        fontSize: 20,
        marginBottom: 3,
        color: 'black',
        textAlign:'center',
        margin:5,
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