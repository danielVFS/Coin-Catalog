import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./src/themes/theme";

import Routes from "./src/routes/";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} style="light" />
      <Routes />
    </NavigationContainer>
  );
}
