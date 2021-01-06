import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Selecione as opções de inserção</Text>
      </SafeAreaView>
      <View style={styles.footer}>
        <View><Text>Content</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: 20,
    ...FONTS.h1,
  },
});
