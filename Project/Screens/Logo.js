import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Logo = () => (
  <View style={styles.container}>
   <Image style={styles.logo} source={require('../assets/Image/Logo.jpg')} />

</View>
);   



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 60,
    marginTop: 200,   //deplacer bas +
    height: 150,
    width: 128,
  },
});

export default Logo;