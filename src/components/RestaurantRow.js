/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const RestaurantRow = ({restaurant, index}) => {
  const [showInfo, setShowInfo] = useState(false);

  const infoPressed = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View
      key={restaurant.name}
      style={[{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}]}>
      <View style={styles.row}>
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
        </View>
        <View style={styles.nameAddress}>
          <Text>{restaurant.name}</Text>
          <Text style={styles.addressText}>{restaurant.address}</Text>
        </View>
        <View style={styles.edges}>
          <TouchableHighlight
            onPress={infoPressed}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>

      {showInfo && (
        <View style={styles.info}>
          <Text>Restaurant Info</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  nameAddress: {
    flex: 8,
    flexDirection: 'column',
  },
  addressText: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default RestaurantRow;
