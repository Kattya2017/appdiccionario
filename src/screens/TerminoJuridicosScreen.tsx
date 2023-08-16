import { StackScreenProps } from "@react-navigation/stack";
import { Image } from "react-native";
import { Dimensions, View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';



const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

export const TerminoJuridicosScreen = ({navigation}: Props) =>{
    return(
        <View style={style.container}>
            <ImageBackground
            source={require('../assets/img/fondo-palabras-4.png')}
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
            source={require('../assets/img/libro.png')}
            style={style.iconoBtn}
          /> 
    </TouchableOpacity>
        </View>
        
        <View style={style.containerClick}>
            <Text style={style.click} >¡Clic aqui!</Text>
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
        marginTop: 12,
        width,
       // height: (height * 40) / 100,
        alignItems: 'flex-end',
        top:-10,
        position: 'absolute',
      },
      btnDiccionario: {
        backgroundColor: '#fff',
        borderColor:'#0C662B',
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
      containerClick: {
        //backgroundColor:'green',
        marginTop: 100,
        width,
        height:-100,
       //height: (height * 40) / 100,
        alignItems: 'flex-end',
        top:-10,
      },
      click:{
        fontSize: 20,
        marginBottom:5,
        fontFamily: 'AkazanRg Bold',
        textAlign:'center',
        color: 'blue',
        right: 8,
        backgroundColor: '#fff',
      }
});