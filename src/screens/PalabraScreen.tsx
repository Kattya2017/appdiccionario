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
import { StackScreenProps } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { };
export const PalabraScreen = ({ navigation }: any) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/img/shipibo-fondo.jpg')}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: height + 200, marginTop: -120, opacity:0.6
                }}
                resizeMode='cover'
            />

            <View style={style.containerTitle}>
                <Text style={style.title}>Palabras con la letra A</Text>
                <Text style={style.title3}>(shipibo)</Text>
            </View>

            <ScrollView>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignificadoScreen')}>
                        <Text style={style.subTitle}>   • Abandono de apelación</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abandono de familia</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abandono de instancia</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abandono de recurso</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abjuración</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abogado del estado</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abogado patrocinante</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abogar</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abolición</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Abonar</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Absolución</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Absolución</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Absolución</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.containerSubTitle}>
                    <TouchableOpacity>
                        <Text style={style.subTitle}>   • Absolución</Text>
                    </TouchableOpacity>
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
        width,
        justifyContent: 'center',
        height: 30,
        marginTop: 20
    },
    subTitle: {
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