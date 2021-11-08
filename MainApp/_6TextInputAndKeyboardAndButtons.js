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
} from 'react-native';
import {ERRROR_IMAGE} from './src/images/index.js'
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submitted);
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
          maxLength={5}
          editable={true}
          secureTextEntry={false}
        />
        <Button
          title={submitted ? 'Clear' : 'Register'}
          onPress={onPressHandler}
          disabled={false}
          color='#00f'
        />
        <TouchableOpacity
          activeOpacity={0.2} //visibility of button between 0 to 1 when clicking
          onPress={onPressHandler}
          style={styles.button}
        >
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Register'}
          </Text>
        </TouchableOpacity>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={onPressHandler}
          style={styles.button}
          underlayColor='#ddd' //color shown to user on clicking button
        >
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Register'}
          </Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback //no styling can be done in this
          onPress={onPressHandler}
        >
          <View style={styles.button}>
            <Text style={styles.text}>
              {submitted ? 'Clear' : 'Register'}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        {/* PRESSABLE IS RECOMMENDED */}
        <Pressable //styling can be done in this but without any feedback like that in higlight or opacity, to generate feedback you can style it using styles array and arrow function as below
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
        <View style={styles.message_container}>
          {
            submitted ? <Text style={styles.text}>You are registered successfully as '{name}'</Text> : <Image style={styles.image} source={ERRROR_IMAGE} 
            resizeMode='stretch'
            />
          }
        </View>
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
  message_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default App;
