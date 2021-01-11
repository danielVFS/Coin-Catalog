import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Header from '../../components/Header';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Period({ navigation }) {
  const returnScreen = () => {
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <Header title="Selecione as opções de inserção" subtitle="Período" returnScreen={returnScreen}/>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Voltar tela</Text>
          </TouchableOpacity>
        </View>
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
