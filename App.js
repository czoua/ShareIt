import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image
} from "react-native";
import Test from "./Test.png";
import Schuhe from "./Schuhe.jpg";
import TP from "./TP.jpg";
import SNES from "./SNES.jpg";
import Controller from "./Controller.jpg";
function Artikel(props) {
  return (
    <View style={styles.listingContainer}>
      <Image source={props.source} alt={props.alt} style={styles.artikelBild} />
      <View style={styles.descriptionContainer}>
        <Text styles={styles.descriptionHeader}>{props.name}!!!</Text>
        <Text style={styles.descriptionText}>
          This is just a test to see how it all lines up
        </Text>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <ScrollView style={styles.container} indicatorStyle="black">
      <Text style={styles.headerText}>Share IT!</Text>
      <TextInput style={styles.searchBar} placeholder="Ich brauche noch was!" />
      <Artikel name="Schuhe" source={Schuhe} alt="Schuhe" />
      <Artikel name="TP" source={TP} alt="TP" />
      <Artikel name="SNES" source={SNES} alt="SNES" />
      <Artikel name="Test" source={Test} alt="Test" />
      <Artikel name="Controller" source={Controller} alt="Controller" />
      <TextInput style={styles.searchBar} placeholder="Ich habe noch was!" />
    </ScrollView>
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
  }
});
