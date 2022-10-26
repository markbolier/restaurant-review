/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  //  componentDidMount () {
  //     fetch('http://localhost:3000/restaurants')
  //       .then(response => response.json())
  //       .then(result => setRestaurants({restaurants: result}));
  //   };

  return (
    <>
      <View style={{flex: 1}}>
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
