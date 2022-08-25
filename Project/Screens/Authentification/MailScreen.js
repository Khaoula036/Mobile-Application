import * as React from 'react';
import { Text, View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import LogoS from '../LogoS';
import TextInputt from '../../components/TextInputt';

function MailScreen({ navigation }) {
  return (
    <View>
      <LogoS />
      <Text style={styles.headline}> Helppicto</Text>
      <Text style={styles.paragraph}> Saisissez votre adresse mail</Text>
      <TextInputt />
      <View style={styles.fixToText}>
       <Button
          title="Précedent"
          onPress={() =>  navigation.navigate("Acceuil")}
        />
        <Button
          title="Suivant"
          onPress={() => navigation.navigate("Pass")}
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

  paragraph: {
    margin: 24,
    marginTop: 90,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'palevioletred',
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


export default MailScreen;
