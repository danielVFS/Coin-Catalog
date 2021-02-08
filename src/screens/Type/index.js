import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

import Header from '../../components/Header';
import Card from '../../components/Card';

import { COLORS, FONTS, SIZES } from "../../themes/theme";

import coinImage from '../../assets/images/coin.png';
import billImage from '../../assets/images/real.png';

export default function Type({ navigation }) {
  const [types, setTypes] = React.useState([
    {
      id: 1,
      name: 'Moeda',
      image: coinImage
    },
    {
      id: 2,
      name: 'Cédula',
      image: billImage
    }
  ])

  return (
    <View style={styles.container}>
      <Header 
        title="Selecione as opções de inserção" 
        subtitle="Tipo" 
        returnScreen={() => navigation.goBack()}
        initialRoute
      />
      <FlatList style={styles.typesList}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={types}
        keyExtractor={(type) => String(type.id)}
        renderItem={({ item: type }) => (
          <Card 
            image={type.image}
            text={type.name}
            selectedOption={
              () => navigation.navigate('Period', { type })
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
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  typesList: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
