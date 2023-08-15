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
                    <Text style={style.title2} >El idioma shipibo es una de las leguas
                        mas usadas y comunes en la Region de Ucayali,
                        es por ello que se realizo diversas coordinaciones
                        con la Univerdidad Nacional Intercultural de la Amazonía, interpretes,
                        docentes y entre otros; con la finalidad de tener acceso al usuario con
                        el vocabulario. Por lo que esta presidencia a tenido por innovar la tabla
                        de terminos juridicos español-shipibo.
                    </Text>
                </View>

                <View style={style.containerSubTitle}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TerminosJuridicosScreen')}>
                        <Text>Terminos Jurídicos</Text>
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
        width,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: 60,
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
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        margin:10,
        fontFamily: 'AkazanRg Bold'
    },
});