import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useEffect } from 'react'
import imagePath from '../constance/imagePath'
import { verticalScale, scale } from 'react-native-size-matters'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },1000)
  },[])
  return (
    <View style={styles.splash}>
      <Image source={imagePath.appLogo}
      style={{height:verticalScale(95), width:scale(95)}}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splash:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
