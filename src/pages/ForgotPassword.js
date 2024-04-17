import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native';
import logo from '../assets/img/logobg.png'

export default function ForgotPassword({navigation}) {
  const [username, setUsername] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleRecovery = () => {
    if (validEmail) {
        ToastAndroid.showWithGravityAndOffset(
            `Email de recuperação enviado para ${username}. Verifique sua caixa de entrada!`,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        navigation.pop(1);
    }
    else {
        ToastAndroid.showWithGravityAndOffset(
            `Email inválido. Verifique e tente novamente.`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
    }
  };

  const handleBack = () => {
    navigation.pop(1);
  };

  useEffect(() => {
    console.log('aaaa');
    // Expressão regular para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(username)) {
      setValidEmail(true);
    }
    else {
        setValidEmail(false);
    }
}, [username]);

  return (
    <View style={styles.container}>
    <Image source={logo} style={styles.tinyLogo} resizeMode="contain" />
      <Text style={styles.label}>Digite seu email, para receber o link para recuperação da sua senha.</Text>
      <TextInput
        style={[styles.input, validEmail === false && username.length > 0 ? styles.errorBorder : validEmail ? styles.successBorder : '']}
        placeholder="Digite o seu email"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={[styles.tooltip, validEmail === false && username.length > 0 ? styles.tooltipError : validEmail ? styles.tooltipSuccess : '']}>{validEmail ? 'Email válido!' : 'Email inválido!'}</Text>
 
      <TouchableOpacity style={styles.signInButton} onPress={handleRecovery}>
        <Text style={styles.signInButtonText}>Recuperar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleBack}>
        <Text style={styles.signInButtonText}>Voltar</Text>
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
  errorBorder: {
    borderColor: 'red',
  },
  successBorder: {
    borderColor: 'green',
  },
  tooltip: {
    fontSize: 10,
    display: 'none'
  },
  tooltipError: {
    display: 'flex',
    color: 'red',
  },
  tooltipSuccess: {
    display: 'flex',
    color: 'green'
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  label: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 18
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
    marginTop: 10,
    color: "blue",
    alignSelf: 'flex-start'
  },
  signInButton: {
    backgroundColor: "red",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  signUpButton: {
    backgroundColor: "green",
    width: "100%",
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
