import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native';
import logo from '../../assets/img/logobg.png'

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (username == 'adm' && password == '123')  {
      navigation.push('HomeDrawer');
    }
    else {
      ToastAndroid.showWithGravityAndOffset(
        `Email ou senha incorretos. Por favor, verifique e tente novamente`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
    
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign up page...");
    navigation.push('Register');
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to forgot password page...");
    navigation.push('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.tinyLogo} resizeMode="contain" />
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleForgotPassword} style={{alignSelf: 'flex-start'}}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Acessar</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10}}>Primeiro acesso?</Text>
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUp}>Crie sua conta agora!</Text>
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
