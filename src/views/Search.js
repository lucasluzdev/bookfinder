import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import logo from "../../assets/img/logo.png";

export default function Search({ route, navigation }) {
  const { search } = route?.params;
  const [searchText, setSearchText] = useState(search || "");
  const [params, setParams] = useState();
  const [result, setResult] = useState();

  const data = [
    {
      titulo: "Introdução à Algoritmos",
      autor:
        "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      ano: 2009,
      editora: "Campus",
      isbn: "978-8535236996",
      categoria: "Algoritmos",
      imagem: require("../models/books/1.jpg"),
      sinopse:
        "Este livro é amplamente utilizado como material didático em cursos de ciência da computação. Ele aborda os conceitos fundamentais de algoritmos de uma maneira clara e abrangente.",
    },
    {
      titulo: "Clean Code: A Handbook of Agile Software Craftsmanship",
      autor: "Robert C. Martin",
      ano: 2008,
      editora: "Prentice Hall",
      isbn: "978-0132350884",
      categoria: "Engenharia de Software",
      imagem: require("../models/books/2.jpg"),
      sinopse:
        "Neste livro, o autor oferece orientações práticas sobre como escrever código limpo e manter a qualidade do software. É uma leitura essencial para desenvolvedores de software.",
    },
    {
      titulo: "Estruturas de Dados e Algoritmos em Java",
      autor: "Michael T. Goodrich, Roberto Tamassia",
      ano: 2012,
      editora: "Bookman",
      isbn: "978-8582600474",
      categoria: "Estruturas de Dados",
      imagem: require("../models/books/3.jpg"),
      sinopse:
        "Este livro explora uma variedade de estruturas de dados e algoritmos usando a linguagem Java. Ele fornece uma base sólida para entender como organizar e processar dados de maneira eficiente.",
    },
    {
      titulo: "Introduction to the Theory of Computation",
      autor: "Michael Sipser",
      ano: 2012,
      editora: "Cengage Learning",
      isbn: "978-1133187790",
      categoria: "Teoria da Computação",
      imagem: require("../models/books/4.jpg"),
      sinopse:
        "Neste livro, o autor introduz os conceitos fundamentais da teoria da computação, incluindo autômatos, gramáticas formais e complexidade computacional. É uma leitura essencial para estudantes de ciência da computação.",
    },
    {
      titulo: "Design Patterns: Elements of Reusable Object-Oriented Software",
      autor: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      ano: 1994,
      editora: "Addison-Wesley Professional",
      isbn: "978-0201633610",
      categoria: "Padrões de Projeto",
      imagem: require("../models/books/5.jpg"),
      sinopse:
        "Este clássico livro descreve padrões de projeto comuns em software orientado a objetos. Ele oferece soluções reutilizáveis para problemas comuns de design de software.",
    },
    {
      titulo: "The Pragmatic Programmer: Your Journey to Mastery",
      autor: "Andrew Hunt, David Thomas",
      ano: 1999,
      editora: "Addison-Wesley Professional",
      isbn: "978-0201616224",
      categoria: "Engenharia de Software",
      imagem: require("../models/books/6.jpg"),
      sinopse:
        "Neste livro, os autores oferecem conselhos práticos e insights sobre como se tornar um programador mais eficaz. Eles abordam uma variedade de tópicos, desde design de software até trabalho em equipe.",
    },
    {
      titulo: "Operating System Concepts",
      autor: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
      ano: 2018,
      editora: "Wiley",
      isbn: "978-1119320913",
      categoria: "Sistemas Operacionais",
      imagem: require("../models/books/7.jpg"),
      sinopse:
        "Este livro aborda os princípios fundamentais dos sistemas operacionais, incluindo processos, memória e sistemas de arquivos. Ele é amplamente utilizado como material didático em cursos de sistemas operacionais.",
    },
    {
      titulo: "Computer Networking: A Top-Down Approach",
      autor: "James F. Kurose, Keith W. Ross",
      ano: 2016,
      editora: "Pearson",
      isbn: "978-0133594140",
      categoria: "Redes de Computadores",
      imagem: require("../models/books/8.jpg"),
      sinopse:
        "Este livro adota uma abordagem de cima para baixo para explicar os princípios das redes de computadores. Ele é adequado tanto para iniciantes quanto para profissionais experientes.",
    },
    {
      titulo: "Artificial Intelligence: A Modern Approach",
      autor: "Stuart Russell, Peter Norvig",
      ano: 2016,
      editora: "Pearson",
      isbn: "978-0134610993",
      categoria: "Inteligência Artificial",
      imagem: require("../models/books/9.jpg"),
      sinopse:
        "Este livro é uma introdução abrangente à inteligência artificial, cobrindo uma variedade de tópicos, desde agentes inteligentes até aprendizado de máquina. É amplamente utilizado como material didático em cursos de IA.",
    },
    {
      titulo: "Database System Concepts",
      autor: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
      ano: 2019,
      editora: "McGraw-Hill Education",
      isbn: "978-1260247888",
      categoria: "Banco de Dados",
      imagem: require("../models/books/10.jpg"),
      sinopse:
        "Este livro aborda os conceitos fundamentais dos sistemas de gerenciamento de banco de dados, incluindo modelagem de dados, linguagens de consulta e otimização de consultas.",
    },
    {
      titulo: "Introduction to Automata Theory, Languages, and Computation",
      autor: "John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman",
      ano: 2006,
      editora: "Addison-Wesley Professional",
      isbn: "978-0321462251",
      categoria: "Teoria da Computação",
      imagem: require("../models/books/11.jpg"),
      sinopse:
        "Este livro oferece uma introdução abrangente à teoria dos autômatos, linguagens formais e computabilidade. Ele é amplamente utilizado como material didático em cursos de teoria da computação.",
    },
    {
      titulo: "Computer Architecture: A Quantitative Approach",
      autor: "John L. Hennessy, David A. Patterson",
      ano: 2017,
      editora: "Morgan Kaufmann",
      isbn: "978-0128119051",
      categoria: "Arquitetura de Computadores",
      imagem: require("../models/books/12.jpg"),
      sinopse:
        "Este livro explora os princípios fundamentais da arquitetura de computadores, incluindo design de processadores, hierarquia de memória e sistemas de E/S.",
    },
    {
      titulo: "Programming Language Pragmatics",
      autor: "Michael L. Scott",
      ano: 2015,
      editora: "Morgan Kaufmann",
      isbn: "978-0124104099",
      categoria: "Linguagens de Programação",
      imagem: require("../models/books/13.jpg"),
      sinopse:
        "Este livro aborda os aspectos práticos das linguagens de programação, incluindo sintaxe, semântica e implementação de compiladores.",
    },
    {
      titulo: "Introduction to Algorithms: A Creative Approach",
      autor: "Udi Manber",
      ano: 1989,
      editora: "Addison-Wesley",
      isbn: "978-0201120376",
      categoria: "Algoritmos",
      imagem: require("../models/books/14.jpg"),
      sinopse:
        "Neste livro, o autor apresenta algoritmos de uma maneira criativa e acessível. Ele é adequado tanto para iniciantes quanto para profissionais experientes.",
    },
    {
      titulo: "Computer Graphics: Principles and Practice",
      autor:
        "John F. Hughes, Andries van Dam, Morgan McGuire, David F. Sklar, James D. Foley",
      ano: 2013,
      editora: "Addison-Wesley Professional",
      isbn: "978-0321399526",
      categoria: "Gráficos por Computador",
      imagem: require("../models/books/15.jpg"),
      sinopse:
        "Este livro explora os princípios fundamentais dos gráficos por computador, incluindo renderização, modelagem e animação. Ele é amplamente utilizado como material didático em cursos de CG.",
    },
    {
      titulo:
        "Web Development with Node and Express: Leveraging the JavaScript Stack",
      autor: "Ethan Brown",
      ano: 2019,
      editora: "O'Reilly Media",
      isbn: "978-1491949306",
      categoria: "Desenvolvimento Web",
      imagem: require("../models/books/16.jpg"),
      sinopse:
        "Neste livro, o autor explora o desenvolvimento web usando o Node.js e o framework Express. Ele abrange desde conceitos básicos até técnicas avançadas de desenvolvimento web.",
    },
    {
      titulo: "Compilers: Principles, Techniques, and Tools",
      autor: "Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman",
      ano: 2006,
      editora: "Pearson",
      isbn: "978-0321486813",
      categoria: "Compiladores",
      imagem: require("../models/books/17.jpg"),
      sinopse:
        "Este livro é uma referência clássica sobre compiladores, cobrindo desde análise léxica até otimização de código. Ele é amplamente utilizado como material didático em cursos de compiladores.",
    },
    {
      titulo: "Computer Security: Principles and Practice",
      autor: "William Stallings, Lawrie Brown",
      ano: 2017,
      editora: "Pearson",
      isbn: "978-0134794105",
      categoria: "Segurança da Informação",
      imagem: require("../models/books/18.jpg"),
      sinopse:
        "Este livro explora os princípios fundamentais da segurança da computação, incluindo criptografia, autenticação e segurança de redes. Ele é adequado tanto para iniciantes quanto para profissionais experientes.",
    },
    {
      titulo: "Machine Learning: A Probabilistic Perspective",
      autor: "Kevin P. Murphy",
      ano: 2012,
      editora: "MIT Press",
      isbn: "978-0262018029",
      categoria: "Aprendizado de Máquina",
      imagem: require("../models/books/19.jpg"),
      sinopse:
        "Neste livro, o autor apresenta uma abordagem probabilística para o aprendizado de máquina. Ele cobre uma variedade de técnicas, desde modelos lineares até redes neurais.",
    },
    {
      titulo: "Introduction to Cryptography: Principles and Applications",
      autor: "Hans Delfs, Helmut Knebl",
      ano: 2007,
      editora: "Springer",
      isbn: "978-3540492436",
      categoria: "Criptografia",
      imagem: require("../models/books/20.jpeg"),
      sinopse:
        "Este livro oferece uma introdução abrangente à criptografia, cobrindo desde cifras clássicas até protocolos de segurança modernos. Ele é adequado tanto para estudantes quanto para profissionais da área.",
    },
  ];

  useEffect(() => {
    setSearchText(search || "");
    handleSearch()
  }, [])

  const handleSearch = () => {
    
    if (searchText?.length) {

      const filtered = data.filter(item => {
        
          return (item.titulo.toLowerCase().includes(searchText.toLowerCase()) || item.autor.toLowerCase().includes(searchText.toLowerCase()) || item.categoria.toLowerCase().includes(searchText.toLowerCase()))
        
      })

      if (filtered.length) {
        setResult(filtered)
      }
      else {
        setResult(data)
      }
    }
    else {
      setResult(data)
    }
    
  };

  const handleDetails = (item) => {

    console.log('params before details', item);

    navigation.navigate("Detalhes", { item });
  };

  const handleLocate = () => {
    navigation.navigate("Localizar Livro", { item: params });
  };

  const handlePDF = () => {
    console.log("pdf");
  };

  const getComponent = (item) => (
    <View style={styles.item}>
          <Image source={item.imagem} style={styles.tinyLogo} />
          <View style={{ flex: 3, marginLeft: 10 }}>
            <Text style={styles.bookTitle}>{item.titulo}</Text>
            <Text style={styles.bookInfo}>{item.autor}</Text>
            <Text style={styles.bookInfo}>
              Categoria: {item.categoria}
            </Text>
            <Text style={styles.bookInfo}>
              Ano de publicação: {item.ano}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleDetails(item)}
            >
              <Text style={{ fontSize: 10, color: "white" }}>
                Detalhes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.locateButton}
              onPress={() => handleLocate(item)}
            >
              <Text style={{ fontSize: 10, color: "white" }}>
                Localizar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.digitalButton}
              onPress={handlePDF}
            >
              <Text style={{ fontSize: 10, color: "white" }}>
                PDF
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  )

  return (
    <View
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      <Text style={{ ...styles.label, textAlign: "center" }}>
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
        <Text style={styles.headline}>Resultados</Text>
        <View>
          <View style={styles.itemContainer}>
          <FlatList
          data={result}
            extraData={result}
            renderItem={({ item }) => getComponent(item)}
            keyExtractor={item => item.titulo.toString()}
          />
          </View>
        </View>
      </View>
    </View>
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
    fontSize: 11,
    fontWeight: "bold",
  },
  bookInfo: {
    fontSize: 10,
  },
  headline: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: "gray",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  locateButton: {
    backgroundColor: "red",
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 6,
  },
  digitalButton: {
    backgroundColor: "green",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
