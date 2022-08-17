import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const ProfilSaisie = () => {
  const [text, onChangeText] = React.useState("Prénom");
  const [textt, onChangeTextt] = React.useState("Nom");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextt}
        value={textt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ProfilSaisie;
