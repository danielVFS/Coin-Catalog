import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Selecione as opções de inserção</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: 20,
    ...FONTS.h1,
  },
});