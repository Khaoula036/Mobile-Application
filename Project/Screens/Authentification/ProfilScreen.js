import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import LogoS from '../LogoS';
import ProfilSaisie from '../../components/ProfilSaisie';

function ProfilScreen({ navigation }) {
  return (
    <View>
      <LogoS />
      <Text style={styles.headline}> Helppicto</Text>
      <Text style={styles.titre}> Création d'un profil </Text>
      <ProfilSaisie />
      <View style={styles.fixToText}>
        <Button
          title="Suivant"
          onPress={() =>  navigation.navigate("Authentification")}
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


  fixToText: {
    textAlign: 'center',
    marginVertical: 60,
    marginHorizontal: 70,
    color: 'palevioletred',
  },

 
});



export default ProfilScreen;
