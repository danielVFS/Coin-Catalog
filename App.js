import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./src/themes/theme";

import Routes from "./src/routes/";

import AuthProvider from "./src/hooks/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={COLORS.primary} style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
