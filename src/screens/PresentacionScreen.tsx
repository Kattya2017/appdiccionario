import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RootStackParams } from "../navigator/StackNavigator";
import { Row } from "react-native-flex-grid";


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const PresentacionScreen = ({navigation}:Props) =>{
    return(
        <View style={style.container}>
            <ImageBackground
            source={require('../assets/img/shipibo-fondo.jpg')}
            style={{
                position: 'absolute',
                width: '100%',
                height: height+200, marginTop:-120, opacity:0.6
            }}
            resizeMode='cover'
            />

                <View style={style.containerBtn}>
                    <Text style={style.title} >Presentación</Text>
                    <Text style={style.title2} >La Corte Superior de Justicia, tiene el
                    constante compromiso en articulación con los intérpretes, docentes y estudiantes
                    de la Universidad Nacional Intercultural de la Amazonía acercar los servicios
                    de justicia a la población de las comunidades nativas mediante el vocabulario de 
                    términos judiciales en el idioma shipibo, siendo una de las lenguas mas usadas y
                    comunes en nuestra Región de Ucayali. Por ello, hemos desarrollado este aplicativo
                    como herramienta tecnológica donde se podra consultar los terminos o palabras con
                    su significado y pronunciamiento en el idioma (español - shipibo) acerca de los
                    términos judiciales mas usados en nuestra corte.
                    </Text>
                </View>

                <View style={style.containerSubTitle}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TerminosJuridicosScreen')}>
                        <Text style={style.title3}>Terminos Jurídicos</Text>
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
    containerSubTitle:{
        //backgroundColor:'red',
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: -70,
        top:100
    },
    title: {
        fontSize: 50,
        marginBottom: 2,
        fontFamily: 'AkazanRg Bold',
        color: '#378A0A'
    },
    title2: {
        //backgroundColor: 'red',
        color: 'black',
        fontSize: 21,
        textAlign: 'justify',
        marginTop: 30,
        margin: 15,
        fontFamily: 'Roboto-Medium'
    },
    title3:{
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        fontWeight:'800',
        textDecorationLine:'underline'
    }
});