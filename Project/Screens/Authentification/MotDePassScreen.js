import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import LogoS from '../LogoS';
import TextSaisie from '../../components/TextSaisie';

function MotDePasseScreen() {
  return (
    <View>
      <LogoS />
      <Text style={styles.headline}> Helppicto</Text>
      <Text style={styles.titre}> Je crée mon profil </Text>
      <Text style={styles.paragraph}> Saisissez et confirmez votre mot de Passe </Text>
      <TextSaisie />
      <View style={styles.fixToText}>
       <Button
          title="Précedent"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Suivant"
          onPress={() => Alert.alert('Right button pressed')}
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
    marginTop: -100, //trans haut -
    width: 500, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },

   titre: {
    margin: 24,
    marginTop: 50,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  paragraph: {
    margin: 24,
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkblue',
  },

  fixToText: {
    textAlign: 'center',
    marginVertical: 80,
    marginHorizontal: 50,
    color: 'palevioletred',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

 
});



export default MotDePasseScreen;
