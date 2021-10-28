import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/Cabecalho";
import Corpo from "./src/components/Corpo";
import Disciplina from "./src/components/Disciplina";

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo />
      <Cabecalho nome="Wanda" curso="Design" />
      <Disciplina nome="Engenharia de Software" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
