import { StackScreenProps } from "@react-navigation/stack";
import { Image } from "react-native";
import { Dimensions, View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';



const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const TerminoJuridicosScreen = ({navigation}: Props) =>{
    return(
        <View style={style.container}>
            <ImageBackground
            source={require('../assets/img/fondo-palabras-2.png')}
            style={{
                position: 'absolute',
                width: '100%',
                height: height+30, marginTop:-20
            }}
            resizeMode='cover'
            />

                {/*<View style={style.containerSubTitle}>
                    <TouchableOpacity onPress={()=> navigation.navigate('TerminosJuridicosScreen')}>
                        <Text>Terminos Jurídicos</Text>
                    </TouchableOpacity>
        </View>*/}

        <View style={style.containerBtn}>
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={style.btnDiccionario} onPress={()=>navigation.navigate('LetrasScreen')}>
          <Image
            source={require('../assets/img/diccionario2.png')}
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
    containerBtn: {
        marginTop: 25,
        //backgroundColor:'red',
        width,
        height: (height * 40) / 100,
        //flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        top:150
      },
      btnDiccionario: {
        //backgroundColor: '#fff',
       // borderColor:'#059A32',
        //borderWidth:2,
        width: 120,
        height: 120,
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
        width: '60%',
        height: '60%',
      },
});