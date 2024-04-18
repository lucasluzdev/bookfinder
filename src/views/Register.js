import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Checkbox from 'expo-checkbox';

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCPF] = useState("");
  const [ra, setRA] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSignUp = () => {
    // Logic for signing up
    console.log(
      "Signing up with:",
      fullName,
      birthdate,
      cpf,
      ra,
      email,
      password,
      isSubscribed
    );
    navigation.push('ConfirmRegister');
  };

  const handleCancel = () => {
    navigation.pop(1);
  };

  return (
    <View style={styles.container}>
        <Text style={{marginBottom: 20, fontSize: 26, fontWeight: 'bold'}}>Faça seu cadastro agora!</Text>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/aaaa"
            value={birthdate}
            onChangeText={setBirthdate}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="000.000.000-00"
            value={cpf}
            onChangeText={setCPF}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>RA</Text>
          <TextInput
            style={styles.input}
            placeholder="00000000000"
            value={ra}
            onChangeText={setRA}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="nome@exemplo.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar email</Text>
          <TextInput
            style={styles.input}
            placeholder="nome@exemplo.com"
            value={confirmEmail}
            onChangeText={setConfirmEmail}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox value={isSubscribed} onValueChange={setIsSubscribed} />
        <Text style={styles.checkboxText}>
          Gostaria de receber sugestões e atualizações por email
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Realizar cadastro</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 0,
    paddingHorizontal: 2
  },
  checkboxText: {
    marginLeft: 5,
    fontSize: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
