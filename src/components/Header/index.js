import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Header({ title, subtitle }) {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',

    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: 20,
    ...FONTS.h1,
  },
  subtitle: {
    backgroundColor: COLORS.tertiary,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 20,
  },
  subtitleText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: "bold",
  },
});
