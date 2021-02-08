import React from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";

import Header from '../../components/Header';
import Card from '../../components/Card';

import republicImage from '../../assets/images/business.png';
import colonialImage from '../../assets/images/colonial.png';
import foreignImage from '../../assets/images/foreign.png';
import imperialImage from '../../assets/images/imperial.png';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function Period({ navigation, route }) {
  const { type } = route.params;

  const [periods, setPeriods] = React.useState([
    {
      id: 1,
      name: 'Brasil Côlonia',
      image: colonialImage
    },
    {
      id: 2,
      name: 'Brasil Império',
      image: imperialImage
    },
    {
      id: 3,
      name: 'Brasil República',
      image: republicImage
    },
    {
      id: 4,
      name: 'Estrangeiras',
      image: foreignImage
    },
  ])
  
  return (
    <View style={styles.container}>
      <Header
        title="Selecione as opções de inserção"
        subtitle="Período"
        returnScreen={() => navigation.goBack()}
      />
      <FlatList style={styles.periodsList}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={periods}
        keyExtractor={(period) => String(period.id)}
        renderItem={({ item: period }) => (
          <Card 
            image={period.image}
            text={period.name}
            selectedOption={
              () => navigation.navigate('Period', { period })
            }
          />
        )}
      />
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: 'center',
  },
  periodsList: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
