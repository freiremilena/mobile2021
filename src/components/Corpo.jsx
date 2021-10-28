import React, { Component } from "react";
import { View, Image } from "react-native";

export default class Corpo extends Component {
  render() {
    let figura = {
      uri: "https://i.pinimg.com/564x/24/88/81/24888158ad5e0fba94da937fedafaa05.jpg",
    };
    return <Image source={figura} style={{ width: 150, height: 150 }} />;
  }
}
