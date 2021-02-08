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
  type: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    padding: 20,
    flex: 1,

    alignItems: 'center',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  }
});
