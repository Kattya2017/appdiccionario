import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import diccionarioApi from '../api/diccionarioApi';
import { Resp, ResultPalabra } from '../interface/palabrainterface';

const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParams, 'PalabraScreen'> { };

export const PalabraScreen = ({ navigation, route }: Props) => {

    const [listPalabra, setListPalabra] = useState<Resp[]>([]);
    useEffect(() => {
        mostrarPalabra();
        ///console.log('hola como estas');
    }, [])


    const mostrarPalabra = async () => {
        try {
            const resp = await diccionarioApi.get<ResultPalabra>(`/palabra/abecedario/${route.params.id}`);
            console.log(resp.data);
            setListPalabra(resp.data.resp);
            console.log(listPalabra);
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
                    width: '100%',
                    height: height + 200, marginTop: -120, opacity: 0.6
                }}
                resizeMode='cover'
            />

            <View style={style.containerTitle}>
                <Text style={style.title}>{route.params.titulo}</Text>
                <Text style={style.title3}>({route.params.titulo_shipibo})</Text>
            </View>

            <ScrollView>
                {
                    listPalabra.map((resp, index) => {
                        return (

                            <View style={style.containerSubTitle} key={resp.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('SignificadoScreen', {id:resp.id, titulo:resp.titulo, titulo_shipibo:resp.titulo_shipibo, descripcion:resp.descripcion, descripcion_shipibo:resp.descripcion_shipibo, audio:resp.audio, id_abecedario:resp.id_abecedario})}>
                                    <Text style={style.subTitle}>   • {resp.titulo}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }


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
        height: 90,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
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
        //backgroundColor:'red',
        width,
        justifyContent: 'center',
        height: 30,
        marginTop: 20
    },
    subTitle: {
        //backgroundColor:'blue',
        fontSize: 25,
        marginBottom: 2,
        color: 'black',
        fontFamily: 'AkazanRg Regular'
    },
    containerBtn: {
        marginTop: 20,
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

});