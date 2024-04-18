import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
  ToastAndroid
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Lo({route, navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { item } = route.params;

useEffect(() => {
  console.log(route.params);
})

  const handleBack = () => {
    navigation.navigate('Home');
  }

  const handleBackOk = () => {
    setModalVisible(false);
    ToastAndroid.showWithGravityAndOffset(
        `A retirada do livro x foi registrada.`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    navigation.navigate('Home');
  };

  useEffect(() => {
    (async () => {
      try {
        // Verificar se o aplicativo tem permissão para acessar a localização do usuário
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log("status", status);
        if (status !== "granted") {
          setErrorMsg("Permissão para acessar a localização negada");
          return;
        }

        // Obter a localização atual do usuário
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (e) {
        console.log("erroo", e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Localização</Text>
          <Text style={{ fontSize: 22, color: "red", fontWeight: "bold" }}>
            1º andar, corredor 2, estante 10
          </Text>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              width: "100%",
              height: "60%",
              marginVertical: 30,
            }}
          >
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Você está aqui"
              />
            </MapView>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={handleBack} style={styles.searchButton}>
              <Text style={styles.forgotPassword}>Pesquisar outro livro</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.confirmButton}>
              <Text style={styles.forgotPassword}>
                Confirmar retirada do livro
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>{errorMsg || "Carregando mapa..."}</Text>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja confirmar a retirada do <Text style={{color: 'red', fontWeight: 'bold'}}>{item.titulo || "livro"}</Text>?</Text>

            <View style={styles.row}>
            <Pressable
              style={[styles.button, styles.buttonNo]}
              onPress={() => setModalVisible(!modalVisible)}
            >
                
              <Text style={styles.textStyle}>Não</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonYes]}
              onPress={handleBackOk}
            >
                
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 15,
  },
  map: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  label: {
    marginVertical: 5,
    alignSelf: "flex-start",
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
  row: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  forgotPassword: {
    color: "white",
    alignSelf: "center",
    fontSize: 11
  },
  confirmButton: {
    backgroundColor: "red",
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 5,
  },
  searchButton: {
    backgroundColor: "green",
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    marginRight: 5,
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
  },
  signUp: {
    color: "white",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: '80%',
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonNo: {
    backgroundColor: 'grey',
    flex: 1,
    marginRight: 5
  },
  buttonYes: {
    backgroundColor: 'red',
    flex: 1,
    marginRight: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
