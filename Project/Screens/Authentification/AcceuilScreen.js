import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Logo from '../Logo';
import Constants from 'expo-constants';
//import Bouton from '../../components/Bouton';

function AcceuilScreen() {
  return (
    <View>
      <Logo />
      <View >
        <Text style={styles.headline}> Helppicto</Text>
        <Text style={styles.paragraph}> Communiquer facilement !</Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="S'inscrire"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Se connecter"
          onPress={() => Alert.alert(' Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold', //gras
    fontSize: 60, //taille +
    marginTop: -50, //trans haut -
    width: 400, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },

  paragraph: {
    margin: 24,
    marginTop: 45,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'palevioletred',
  },

  fixToText: {
    textAlign: 'center',
    marginVertical: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default AcceuilScreen;
