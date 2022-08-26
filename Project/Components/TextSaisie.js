import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const TextSaisie = () => {
  const [text, onChangeText] = React.useState("Mot de passe");
  const [textt, onChangeTextt] = React.useState("Confirmez votre mot de passe");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextt}
        value={textt}
        secureTextEntry
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

export default TextSaisie;
