import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Logo = () => (
  <View >
   <Image style={styles.logo} source={require('../assets/Image/Logo.jpg')} />

</View>
);   



const styles = StyleSheet.create({

  logo: {
    margin: 20,
    marginTop: 60,   //deplacer bas +
    height: 85,
    width: 90,
  },
});

export default Logo;