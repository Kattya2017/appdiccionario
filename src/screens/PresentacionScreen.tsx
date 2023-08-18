import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RootStackParams } from "../navigator/StackNavigator";
import { Row } from "react-native-flex-grid";
import { Image } from "react-native";


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

export const PresentacionScreen = ({ navigation }: Props) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../assets/img/presentacion.png')}
                style={{
                    position: 'absolute',
                    width,
                    height,
                }}
                resizeMode='cover'
            />

            <View style={style.containerBtn}>
                <Text style={style.title} >Presentación</Text>
                <Text style={style.title2} >La Corte Superior de Justicia representado por el
                    Presidente Dr. Tullio Deifilio Bermeo Turchi, tiene el compromiso de articular
                    acciones con instituciones públicas y privadas, en esta oportunidad con la
                    Universidad Nacional Intercultural de la Amazonía y los interpretes acreditados
                    por el Ministerio de Cultura, con el fin de brindar los servicios del sistema de
                    justicia a las personas más vulnerables de nuestra región y sin discriminación alguna.
                </Text>
                <Text style={style.title2} >En esta oportunidad se presenta un vocabulario en términos jurídicos más usuales
                    para el alcance de todos los usuarios, con el propósito de llegar a nuestros hermanos
                    de las comunidades nativas y comunidades campesinas. Es por ello, que se ha desarrollado
                    el aplicativo “Términos Jurídicos” como herramienta tecnológica donde se podrá consultar
                    las palabras en la lengua (shipibo-konibo), considerando que esta lengua pertenece a la
                    familia Pano y es más hablado en las cuencas del Río Ucayali.
                </Text>
            </View>

            <View style={style.containerSubTitle}>
                {/*<TouchableOpacity onPress={() => navigation.navigate('TerminosJuridicosScreen')}>
                    <Text style={style.title3}>Terminos Jurídicos</Text>
            </TouchableOpacity>*/}

                <TouchableOpacity
                activeOpacity={0.7}
                    style={style.btnDiccionario} onPress={() => navigation.navigate('LetrasScreen')}>
                    <Image
                        source={require('../assets/img/libro.png')}
                        style={style.iconoBtn}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={style.btnDiccionario} onPress={() => navigation.navigate('LetrasScreen')}>
                    <Image
                        source={require('../assets/img/libro.png')}
                        style={style.iconoBtn}
                    />
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
    containerBtn: {
        marginTop: 20,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },
    title: {
        fontSize: 50,
        marginTop: 45,
        //marginBottom: 2,
        fontFamily: 'AkazanRg Bold',
        color: '#378A0A'
    },
    title2: {
        //backgroundColor: 'white',
        color: 'black',
        fontSize: 17,
        textAlign: 'justify',
        marginTop: 10,
        margin: 25,
        fontFamily: 'Roboto-Medium'
    },
    containerSubTitle: {
        //backgroundColor:'red',
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: -70,
        top: 40
        //margin: 12, width, alignItems: 'flex-end', top: -10, position: 'absolute'
    },
    title3: {
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '800',
        textDecorationLine: 'underline'
    },
    btnDiccionario: {
        backgroundColor: '#fff',
        borderColor:'#0F8131',
        borderWidth:2,
        width: 85,
        height: 85,
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
        width: '78%',
        height: '78%'
      },

});