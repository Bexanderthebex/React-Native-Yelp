import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (restaurantId) => {
    const response = await yelp.get(`/${restaurantId}`);

    setRestaurant(response.data);
  }
  useEffect(() => {
    getRestaurant(navigation.getParam('businessId'));
  }, [])

  return <View>
    <Text>Images</Text>
    {
      restaurant 
      ? <FlatList 
          showsVerticalScrollIndicator={false}
          data={restaurant.photos}
          keyExtractor={restaurantPhoto => restaurantPhoto}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{uri: item}}></Image>
          }}
        />
      : null
    }

  </View>;
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 4
  }
});

export default ResultsShowScreen;
