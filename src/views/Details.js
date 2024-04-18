import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import logo from "../../assets/img/logo.png";

export default function Details({ route, navigation }) {

  const { item } = route.params;

  const handleDetails = () => {
    navigation.navigate("Detalhes");
  };

  const handleLocate = () => {
    navigation.navigate("Localizar Livro", {item});
  };

  const handlePDF = () => {
    console.log("pdf");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <View>
        <Image source={item.imagem} style={styles.tinyLogo} />
        <View style={styles.row}>
          <Text style={styles.bookTitle}>Titulo: </Text>
          <Text>{item.titulo}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Autor(es): </Text>
            <Text>{item.autor}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Categoria: </Text>
            <Text>{item.categoria}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Ano de publicação: </Text>
            <Text>{item.ano}</Text>
        </View>
        <View style={styles.row}>
            <Text><Text style={styles.bookTitle}>Overview: </Text>{item.sinopse}</Text>
        </View>

        <View style={{...styles.row, justifyContent: 'space-around', marginTop: 15}}>
            <TouchableOpacity style={styles.locateButton} onPress={handleLocate}>
                <Text style={{color: 'white'}}>Localizar Livro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pdfButton} onPress={handleDetails}>
                <Text style={{color: 'white'}}>Baixar PDF</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  tinyLogo: {
    flex: 1,
    width: 140,
    height: 180,
    alignSelf: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
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
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
  },
  itemContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginRight: 5,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bookInfo: {
    fontSize: 12,
  },
  headline: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: "red",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  locateButton: {
    backgroundColor: "red",
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 6,
    marginRight: 10
  },
  pdfButton: {
    flex: 1,
    backgroundColor: "green",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 6,
    marginLeft: 10
  },
  digitalButton: {
    backgroundColor: "lightgreen",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
