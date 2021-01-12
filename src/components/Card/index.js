import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Card({ image, text, returnOption }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => returnOption()}>
      <Image source={image} style={styles.cardImage}/>
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
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
    fontSize: SIZES.h2,
    fontWeight: "700",
    paddingLeft: 30,
  }
});
