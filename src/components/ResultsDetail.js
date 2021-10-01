import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ restaurant }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{uri: restaurant.image_url, resizeMethod: 'auto'}} />
      <Text style={styles.text}>{restaurant.name}</Text>
      <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 15,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default ResultsDetail;
