import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
  FlatList
} from "react-native";
import Test from "./Test.png";
import Schuhe from "./Schuhe.jpg";
import TP from "./TP.jpg";
import SNES from "./SNES.jpg";
import Controller from "./Controller.jpg";
function Artikel(props) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View>
      <View style={styles.listingContainer}>
        <Image
          source={props.source}
          alt={props.alt}
          style={styles.artikelBild}
        />
        <View style={styles.descriptionContainer}>
          <Text styles={styles.descriptionHeader}>{props.name}!!!</Text>
          <Text style={styles.descriptionText}>
            This is just a test to see how it all lines up
          </Text>
        </View>
      </View>
      <Button
        onPress={() => {
          setIsLiked(true);
        }}
        disabled={isLiked}
        title={isLiked ? "Like!" : "Like?"}
      />
    </View>
  );
}
const initialArticles = { count: 5 };
export default function App() {
  const [count, setCount] = useState(6);
  const [articles, setArticles] = useState([
    { key: "1", name: "Schuhe", source: { Schuhe }, alt: "Schuhe" },
    { key: "2", name: "TP", source: { TP }, alt: "TP" },
    { key: "3", name: "SNES", source: { SNES }, alt: "SNES" },
    { key: "4", name: "Test", source: { Test }, alt: "Test" },
    { key: "5", name: "Controller", source: { Controller }, alt: "Controller" }
  ]);
  function addArticle() {
    articles.push({
      key: `${count}`,
      name: `${count}`,
      source: { TP },
      alt: "TP"
    });
    articles = [];
    setCount(count + 1);
    setArticles(articles);
  }
  return (
    <View style={styles.container} indicatorStyle="black">
      <Text style={styles.headerText}>Share IT!</Text>
      <TextInput style={styles.searchBar} placeholder="Ich brauche noch was!" />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Artikel name={item.name} source={item.source} alt={item.name} />
        )}
      />
      <TouchableHighlight style={styles.button} onPress={() => addArticle()}>
        <Text>{count}</Text>
      </TouchableHighlight>
      <TextInput style={styles.searchBar} placeholder="Ich habe noch was!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 100
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: "normal",
    textAlign: "left"
  },
  descriptionHeader: {
    fontSize: 50,
    fontWeight: "bold"
  },
  listingContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  descriptionContainer: {
    padding: 5,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  artikelBild: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  searchBar: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center"
  },
  button: {
    height: 100,
    width: 100
  }
});
