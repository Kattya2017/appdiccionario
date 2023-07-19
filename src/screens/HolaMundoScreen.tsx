import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import {drawerStyle} from '../style/DrawerMenuStyle';


interface Props
  extends DrawerScreenProps<RootDrawerTransparenciaParams, 'ContadorScreen'> {}



const HolaMundoScreen = ({navigation}: Props) => {
    useEffect(() => {
        navigation.setOptions({
          header: () => (
            <View style={drawerStyle.container}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                  marginLeft: 10,
                }}>
                {/*<Icon
                  name="menu"
                  style={{
                    fontSize: 30,
                    color: 'white',
                  }}
                />*/}
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
                {' '}
                CSJ Ucayali
              </Text>
            </View>
          ),
          drawerPosition: 'left',
        });
      }, []);
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -100,
    marginBottom: -100,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    fontSize: 18,
    /*marginTop: 20,*/
    marginBottom: 17,
    textDecorationLine: 'underline',
  },
  containerBtn: {
    width: '100%',
    height: '100%',
    marginBottom: 100,
  },
  general: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


export default HolaMundoScreen;