import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Stars from 'components/Stars';
import FoodImage from 'images/food.jpg';

const RestaurantInfo = ({route}) => {
  const {place} = route.params;
  return (
    <>
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image source={FoodImage} style={styles.image} resizeMode="contain" />
          <View style={styles.info}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
            <Stars rating={place.rating} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: 'grey',
    maginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#FFF',
    marginTop: 10,
  },
  butonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RestaurantInfo;
