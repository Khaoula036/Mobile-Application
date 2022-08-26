import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'


const ParametreProfilScreen = ({navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword]= useState ('')

    

  return (
    <KeyboardAvoidingView
       style={styles.container}
       behavior="panding"
    >
       <Text style={styles.headline}> Paramètres </Text>
       <View style={styles.inputContainer}>
          <TextInput
           placeholder="Email"
           value={email}
           onChangeText= {text => setEmail(text)}
        
           style={styles.input}
        />
        <TextInput
           placeholder="Password"
           value={ password}
           onChangeText={text => setPassword(text)}
           style={styles.input}
           secureTextEntry
        />
        <TextInput
           placeholder="ConfirmPassword"
           value={ confirmPassword}
           onChangeText={text => setConfirmPassword (text)}
           style={styles.input}
           secureTextEntry
        />
      
       </View>


       <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={() => {
              Alert.alert('Enregistré!') }}
            style={styles.button}
        >
        <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Acceuil")}
            style={[styles.button,styles.buttonOutline]}
        >

        <Text style= {styles.buttonOutlineText}> Déconnexion</Text>
        </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
    
  )
}

export default ParametreProfilScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
        width: '80%'
    },
input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,

},

input: {
    backgroundColor: 'palevioletred',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
    
},

buttonContainer: {
    width: '60%',
    justifyContent: 'center' ,
    alignItems: 'center' ,
    marginTop: 40,
},
button: {
    backgroundColor: "darkblue",
    width: '100',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
},   

buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: "darkblue",
    borderWidth: 2,
},

buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
    color: "darkblue",
    fontWeight: '700',
    fontSize: 16,
},
headline: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold', //gras
    fontSize: 60, //taille +
    width: 400, //translater droit +
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },

})
