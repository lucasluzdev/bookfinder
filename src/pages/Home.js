import React, { useState } from "react";
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

export default function Home({navigation}) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    navigation.navigate('Buscar');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <Text style={{...styles.label, textAlign: 'center'}}>
        Pesquisar por livros, artigos e outros materiais acadêmicos
      </Text>

      <View style={styles.row}>
        
          <TextInput
            style={styles.input}
            placeholder="Titulo, autor, categoria..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        
      </View>

      <View>
        <Text style={styles.headline}>Últimas pesquisas</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styles.headline}>Mais vistos por você</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={styles.headline}>Mais vistos por outros usuários</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>

            <View style={styles.item}>
              <Image source={logo} style={styles.tinyLogo} />
              <Text style={styles.bookTitle}>Title: Book 1</Text>
              <Text style={styles.bookInfo}>Author: Author 1</Text>
              <Text style={styles.bookInfo}>Category: Category 1</Text>
              <Text style={styles.bookInfo}>Ano de publicação: 01/01/2022</Text>
            </View>
          </View>
        </ScrollView>
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
    width: 80,
    height: 100,
    alignSelf: "center",
    marginBottom: 5,
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
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 60,
    height: 40,
  },
  buttonText: {
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    height: 180,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginRight: 5,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    width: 160,
  },
  bookTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  bookInfo: {
    fontSize: 10,
    textAlign: "center",
  },
  headline: {
    fontWeight: "bold",
    color: 'black',
    textAlign: "center",
    fontSize: 18,
    marginTop: 10
  },
});
