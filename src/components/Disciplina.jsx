import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";

export default class Disciplina extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>Nome: {this.props.nome}</Text>
      </View>
    );
  }
}
