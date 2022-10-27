/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, FlatList, Image} from 'react-native';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import PizzaImage from 'images/pizza.png';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/markbolier/restaurant-review/restaurants',
    )
      .then(response => response.json())
      .then(result => setRestaurants(result));
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Image source={PizzaImage} />
        </View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live search"
          onChangeText={text => {
            setSearchQuery(text);
          }}
          value={useState(searchQuery)}
        />

        <FlatList
          data={restaurants.filter(restaurant => {
            return (
              !searchQuery ||
              restaurant.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >
                -1
            );
          })}
          renderItem={({item, index}) => (
            <RestaurantRow restaurant={item} index={index} />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={21}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default App;
