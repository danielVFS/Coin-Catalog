import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

import Header from '../../components/Header';
import Card from '../../components/Card';

import republicImage from '../../assets/images/business.png';
import colonialImage from '../../assets/images/colonial.png';
import foreignImage from '../../assets/images/foreign.png';
import imperialImage from '../../assets/images/imperial.png';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Period({ navigation, route }) {
  const { type } = route.params;
  
  const returnScreen = () => {
    navigation.goBack();
  }
  
  const republicOption = () => {
    //navigation.navigate();
  }

  const colonialOption = () => {
    //navigation.navigate();
  }

  const foreignOption = () => {
    //navigation.navigate();
  }

  const imperialOption = () => {
    //navigation.navigate();
  }

  return (
    <View style={styles.container}>
      <Header title="Selecione as opções de inserção" subtitle="Período" returnScreen={returnScreen}/>
      <View style={[styles.footer]}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          style={styles.scroll}
        >
          <Card 
            image={colonialImage}
            text="Brasil Colônia"
            returnOption={colonialOption}
          />
          <Card 
            image={imperialImage}
            text="Brasil Império"
            returnOption={imperialOption}
          />
          <Text style={{ color: '#000' }}>{ type.name }</Text>
          <Card 
            image={republicImage}
            text="Brasil República"
            returnOption={republicOption}
          />
          <Card 
            image={foreignImage}
            text="Estrangeiras"
            returnOption={foreignOption}
          />
        </ScrollView>
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
  scroll: {
    width: '100%',
    marginHorizontal: 0,
  },
});
