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
        top:80
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
        fontSize: 18,
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