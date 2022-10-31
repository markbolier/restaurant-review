/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const AddReview = navigate => {
  const [input, setInput] = useState({
    name: '',
    comment: '',
  });

  const [rating, setRating] = useState(0);

  const close = () => {
    navigate.navigation.goBack();
  };

  const submitReview = () => {
    fetch(
      'https://my-json-server.typicode.com/markbolier/restaurant-review/reviews',
      {
        method: 'POST',
        body: JSON.stringify({
          name: input.name,
          rating: rating,
          comment: input.comment,
        })
          .then(response => response.json())
          .then(result => {
            navigate.navigation.goBack();
          }),
      },
    );
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={close}>
          <FontAwesomeIcon icon={faClose} size={30} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          style={styles.input}
          label={input.name}
          placeholder="Name (optional)"
          onChangeText={name => setInput({name: name})}
        />
        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => {
            return (
              <TouchableOpacity
                onPress={() => setRating(i)}
                style={styles.starButton}
                key={i}>
                <FontAwesomeIcon
                  icon={faStar}
                  color={rating >= i ? '#FFD64C' : '#CCCCCC'}
                  size={40}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Review"
          label={input.comment}
          onChangeText={comment => setInput({comment: comment})}
          multiline={true}
          numberOfLine={5}
        />
        <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddReview;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066CC',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});
