/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons/faStarHalf';

const Stars = ({rating}) => {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View style={{flexDirection: 'row'}}>
      {stars.map((_, i) => {
        const name = Math.floor(rating) > i ? faStar : faStarHalf;
        return <FontAwesomeIcon key={i} icon={name} color={'#FFD64C'} />;
      })}
    </View>
  );
};

export default Stars;
