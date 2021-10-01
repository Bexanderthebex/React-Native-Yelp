import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ headerText, restaurants }) => {
  return <View style={styles.container}>
    <Text style={styles.header}>{headerText}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={(restaurant) => restaurant.id}
      renderItem={({ item }) => {
        return <ResultsDetail restaurant={item}/>;
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

export default ResultsList;
