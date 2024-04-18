import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../../assets/img/logobg.png'

export default function ConfirmRegister({navigation}) {
  

  const handleBack = () => {
    navigation.pop(2);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.tinyLogo} resizeMode="contain" />
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Seus dados estão seguros conosco!</Text>

      <Text style={styles.label}>Suas informações serão verificads, e se estiver tudo correto, você será notificado via email, e poderá acessar o aplicativo e encontrar todos os livros, artigos e materiais que desejar! :)</Text>
     
      <TouchableOpacity onPress={handleBack} style={styles.signUpButton}>
        <Text style={styles.forgotPassword}>ok</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  label: {
    marginVertical: 5,
    alignSelf: 'flex-start'
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: "white",
    alignSelf: 'center'
  },
  signUpButton: {
    backgroundColor: "red",
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
  },
  signUp: {
    color: "white",
  },
});
