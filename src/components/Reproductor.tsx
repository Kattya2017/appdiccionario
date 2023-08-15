import React, { useState, useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    audio:string
}

const { width, height } = Dimensions.get('window');
const Reproductor = ({audio}:Props) => {
    
    const [music, setMusic] = useState<Sound>();
    const [duracion, setDuracion] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [visible, setVisible] = useState(false);
    const play = () => {
        try {
            setVisible(true);
            let playlist = new Sound(`http://192.168.47.94:4000/api/palabra/mostrar/audio/${audio}`, Sound.MAIN_BUNDLE, (err) => {
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
    useEffect(() => {
        if (music) {
            let id = setInterval(() => {
                music.getCurrentTime((second, play) => {
                    setSegundos(second)
                })
            }, 100)
        }
    }, [music]);
    return (
        <View style={style.containerImg}>
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
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding: 25,
                    width,
                    alignItems:'center'
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
    )
}

export default Reproductor;

const style = StyleSheet.create({
    containerImg: {
        //backgroundColor:'green',
        
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        //marginTop: 20
    },
})