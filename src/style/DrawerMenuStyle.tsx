import { StyleSheet } from 'react-native';



export const drawerStyle = StyleSheet.create({
    container:{
      top:0,
        flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'absolute',
            height: 50,
            width: '100%',
            backgroundColor: '#960b28',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
    }
});