import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Card({ image, text, selectedOption }) {
  return (
    <TouchableOpacity style={[styles.card, styles.shadow]} onPress={() => selectedOption()}>
      <Image source={image} style={styles.cardImage}/>
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 18,
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: COLORS.secondary,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardText: {
    fontSize: SIZES.body2,
    fontWeight: "700",
    paddingLeft: 20,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }
});
