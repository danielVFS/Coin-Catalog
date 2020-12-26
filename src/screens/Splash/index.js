import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import { FONTS, COLORS } from "../../themes/theme";

export default function Loading() {
  return (
    <View style={styles.Container}>
      <LottieView
        source={require("../../assets/coin-flip.json")}
        autoPlay
        loop
      />
      <View style={styles.Footer}>
        <Text style={styles.By}>By</Text>
        <Text style={styles.Author}>Vivendo a História</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  Footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  By: {
    color: COLORS.lightGray,
    ...FONTS.body3,
  },
  Author: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: "bold",
  },
});
