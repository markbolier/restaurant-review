/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons/faUtensils';

const About = () => {
  return (
    <View style={{flex: 1, padding: 40}}>
      <Text style={styles.header}>About Restaurant Review</Text>
      <FontAwesomeIcon
        icon={faUtensils}
        size={100}
        style={styles.icon}
        color={'#0066CC'}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        ligula ullamcorper, pellentesque magna quis, lobortis quam.
      </Text>
      <Text style={styles.text}>
        Mauris efficitur elementum cursus. Cras ultrices urna in ex rutrum
        rutrum nec sit amet lacus. Suspendisse ullamcorper lectus eget ornare
        venenatis. Suspendisse potenti.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 20,
  },
});
