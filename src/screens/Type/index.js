import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Header from '../../components/Header';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Type({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.footer}>
        <View><Text>Content</Text></View>
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  footer: {
    flex: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
