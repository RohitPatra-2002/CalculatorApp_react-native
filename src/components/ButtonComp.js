import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const ButtonComp = ({text, onpress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#2c3e50',
        height:80,
        width:80,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:10
    },
    text:{
      fontSize:28,
      color:'white',
      fontWeight:'bold',
    }
})
