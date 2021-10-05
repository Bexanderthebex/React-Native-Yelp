import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const {search, restaurants, errorMessage} = useRestaurants();

  const restaurantsMap = restaurants.reduce((acc, val) => {
    const restaurantPriceCategory = val['price'];
    if (!acc[restaurantPriceCategory]) {
      acc[restaurantPriceCategory] = []
    }
    acc[restaurantPriceCategory].push(val)
    return acc;
  }, {});

  const headers = ['Cost Effective', 'Bit Pricier', 'Big Spender', 'Billionaires table', "Jeff Bezos Only"]

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => search(term)}
      />
      <ScrollView>
        {
          Object.keys(restaurantsMap)
            .map((restaurantPriceKey, index) => {
              return (
                <ResultsList
                  key={restaurantPriceKey}
                  restaurants={restaurantsMap[restaurantPriceKey]}
                  headerText={headers[index]}
                />
              )
            })
        }
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
