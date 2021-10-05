import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ headerText, restaurants, navigation }) => {
  return <View style={styles.container}>
    <Text style={styles.header}>{headerText}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={(restaurant) => restaurant.id}
      renderItem={({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", { businessId: item.id })}>
          <ResultsDetail restaurant={item}/>
        </TouchableOpacity>
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
