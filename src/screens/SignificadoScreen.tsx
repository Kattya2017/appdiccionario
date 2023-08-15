import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, Alert, ImageBackground, ScrollView, Button } from 'react-native';
import { Resp, ResultPalabra } from '../interface/palabrainterface';
import diccionarioApi from '../api/diccionarioApi';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import Reproductor from '../components/Reproductor';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParams, 'SignificadoScreen'> { };

export const SignificadoScreen = ({ route, navigation }: Props) => {

    const [music, setMusic] = useState<Sound>();
    const [duracion, setDuracion] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [visible, setVisible] = useState(false);
    const play = async() => {
        try {
            setVisible(true);
            let playlist = new Sound(`https://backendiccionario.gongalsoft.com/api/palabra/mostrar/audio/${route.params.audio}`, Sound.MAIN_BUNDLE, (err) => {
                if (err) {
                    console.log(err);
                    //Alert.alert('Error','Error de reproduccion');
                    return;
                }
                setDuracion(playlist.getDuration());
                playlist.play((success) => {
                    console.log('end', success);

                })
            })
            setMusic(playlist);

        } catch (error) {
            Alert.alert('Error', 'Error de reproduccion');
        }
    }
    const retornar = () => {
        music?.stop();
        navigation.pop();
    }
    useEffect(() => {
        try {
            if (music) {
                let id = setInterval(() => {
                    music.getCurrentTime((second, play) => {
                        setSegundos(second)
                    })
                }, 100)
            }
        } catch (error) {
            
        }
    }, [music]);
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/img/fondo-abc1.png')}
                style={{
                    position: 'absolute',
                    width,
                    height: '100%'
                }}
                resizeMode='cover'
            />
            {/* Este View Pertenece al Header */}
            <View
                style={{
                    backgroundColor: '#006605',
                    height: 55,
                    width,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        width: '17%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={retornar}
                    >
                        <Icon
                            name='arrow-back-outline'
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Diccionario Jurídico CSJUC</Text>
                </View>
            </View>
            {/* Aca comienza el contenido */}
            <ScrollView
                style={{ flex: 1 }}
            >
                <View style={style.containerTitle}>
                    <Text style={style.title}>{route.params.titulo}</Text>
                    <Text style={style.title3}>({route.params.titulo_shipibo})</Text>
                </View>

                <View style={style.containerSubTitle}>
                    <Text style={style.subTitle}>{route.params.descripcion}</Text>
                </View>

                <View style={style.containerSubTitle}>
                    <Text style={style.subTitle2}>{route.params.descripcion_shipibo}</Text>
                </View>

                <View style={style.containerReproductor}>
                    {/* <ImageBackground
                        source={require('../assets/img/reproductor.png')}
                        style={{
                            position:'absolute',
                            zIndex:-5,
                            width,
                            height:140,
                        }}
                    /> */}
                    <View
                        style={{
                            display: (visible) ? 'none' : 'flex'
                        }}
                    >
                        <TouchableOpacity
                            onPress={play}

                        >
                            <Icon
                                name='play-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            display: (!visible) ? 'none' : 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 25,
                            width,
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => music?.setCurrentTime(segundos - 15)}
                        >
                            <Icon
                                name='play-back-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => music!.pause()}
                        >
                            <Icon
                                name='pause-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => music?.play()}
                        >
                            <Icon
                                name='play-circle-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setVisible(false);
                                music?.stop();

                            }}
                        >
                            <Icon
                                name='stop-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => music?.setCurrentTime(segundos + 15)}
                        >
                            <Icon
                                name='play-forward-outline'
                                size={55}
                                color={'black'}
                            />

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height,
        alignItems: 'center',
    },
    containerTitle: {
        //backgroundColor:'red',
        width,
        justifyContent: 'center',
        alignItems: 'center',
        //height: 90,
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
        alignItems: 'center',
        //height: 180,
        marginTop: 15
    },
    subTitle: {
        //backgroundColor:'red',
        fontSize: 25,
        //marginBottom: -20,
        color: 'black',
        textAlign: 'center',
        margin: 10,
        fontFamily: 'AkazanRg Regular',
    },
    subTitle2: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        margin: 10,
        fontFamily: 'AkazanRg Regular',

    },
    containerReproductor: {
        //backgroundColor:'green',

        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        //marginTop: 20
    },
});