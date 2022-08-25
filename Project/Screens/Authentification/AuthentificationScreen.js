import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LogoS from '../LogoS';
import AuthentifSaisie from '../../components/AuthentifSaisie';

function AuthentificationScreen({ navigation }) {
  return (
    <View>
      <LogoS />
      <Text style={styles.headline}> Helppicto</Text>
      <Text style={styles.titre}> Connexion </Text>
      <AuthentifSaisie />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Barre")}>
        <Text style={styles.submitButtonText}> Se connecter </Text>
      </TouchableOpacity>
      <View style={styles.fixToText}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold', //gras
    fontSize: 60, //taille +
    marginTop: -100, //trans haut -
    width: 500, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },

  titre: {
    margin: 24,
    marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  fixToText: {
    textAlign: 'center',
    marginVertical: 60,
    marginHorizontal: 70,
    color: 'palevioletred',
  },

  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});

export default AuthentificationScreen;
