import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Header from '../../components/Header';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

import coinImage from '../../assets/images/coin.png';
import billImage from '../../assets/images/real.png';

export default function Type({ navigation }) {
  const returnScreen = () => {
    navigation.goBack();
  }

  const coinOption = () => {
    navigation.navigate("Period");
  }

  const billOption = () => {
    navigation.navigate("Period");
  }

  return (
    <View style={styles.container}>
      <Header 
        title="Selecione as opções de inserção" 
        subtitle="Tipo" 
        returnScreen={returnScreen}
        initialRoute
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.card} onPress={() => coinOption()}>
          <Image source={coinImage} style={styles.cardImage}/>
          <Text style={styles.cardText}>Moeda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => billOption()}>
          <Image source={billImage} style={styles.cardImage}/>
          <Text style={styles.cardText}>Cédula</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
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
