import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Acces = ({ onPress, title,iconName }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.criteriaRow}>
            <Ionicons
              style={styles.icon}
              name= {iconName}
              color='palevioletred'
              size={30}
            />
            <Text style={styles.buttonText}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'darkblue',
    padding: 20,
    borderRadius: 15,
    //fontSize: 30,
    height: 100,
    width: 300,
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 40,
  },
icon: {
    padding: 12,
  },

  criteriaRow: {
    flexDirection: 'row',
    padding: 25,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: -40, //trans haut -
    //fontWeight: 'bold', //gras
  },
});

export default Acces;
