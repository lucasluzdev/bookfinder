import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import logo from "../assets/img/logo.png";

export default function Search({ navigation }) {
  const handleDetails = () => {
    navigation.navigate("Detalhes");
  };

  const handleLocate = () => {
    navigation.navigate("Localizar");
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
        <Image source={logo} style={styles.tinyLogo} />
        <View style={styles.row}>
          <Text style={styles.bookTitle}>Title: </Text>
          <Text>Book 1</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Author: </Text>
            <Text>Author 1</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Category: </Text>
            <Text>Category 1</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.bookTitle}>Ano de publicação: </Text>
            <Text>2005</Text>
        </View>
        <View style={styles.row}>
            <Text><Text style={styles.bookTitle}>Overview: </Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi asperiores in ea! Harum perferendis tempore labore possimus totam libero eum, numquam est nesciunt iste praesentium vitae repudiandae in ut nihil?</Text>
        </View>

        <View style={{...styles.row, justifyContent: 'space-around', marginTop: 15}}>
            <TouchableOpacity style={styles.locateButton}>
                <Text style={{color: 'white'}}>Localizar Livro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pdfButton}>
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
