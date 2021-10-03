import React, { Component } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import galaxia from "../../assets/img/galaxy.jpeg";


class Aluno extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={galaxia} style={styles.background}>
          <Text style={styles.nome}>Milena Freire</Text>
          <Text style={styles.nome}> 22 anos</Text>
          <Text style={styles.nome}> Design Degital</Text>
          <Text style={styles.nome}> Ocara - Ce</Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nome: {
    color: "#ffffff",
    fontSize: 18,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
  },
});

export default Aluno;
