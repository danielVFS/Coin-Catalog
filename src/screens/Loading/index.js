import React from "react";
import { View, Text } from "react-native";

import { FONTS, COLORS } from "../../themes/theme";

export default function Loading() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 50, ...FONTS.h1 }}>Loading</Text>
    </View>
  );
}
