/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      ToastAndroid.showWithGravityAndOffset('The name must be longer than 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, 200
      );//SHORT=>2 seconds, LONG=>3.5 seconds  
    }
  }

  return (
    <View
      style={styles.body}
    >
      <View
        style={styles.input1}
      >
        <Text style={styles.text}>Please enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g. John'
          onChangeText={(value) => { setName(value) }}
          multiline={false}
          keyboardType='numeric'
          editable={true}
          secureTextEntry={false}
        />
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#ddd' : '#0f0' },
            styles.button,
          ]}
        >
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Register'}
          </Text>
        </Pressable>
        {
          submitted ? <Text style={styles.text}>You are registered successfully as '{name}'</Text> : null
        }

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'flex-start',
    borderLeftWidth: 20,
    borderLeftColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  input1: {
    width: '90%',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0f0',
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default App;
