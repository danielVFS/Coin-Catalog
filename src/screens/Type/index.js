import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Type({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Period")}>
        <Text>Trocar de tela</Text>
      </TouchableOpacity>
    </View>
  );
}
