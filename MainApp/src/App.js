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
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import Header from './Header.js';
import MashButton from './CustomButtons';
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  }

  return (
    <View
      style={styles.body}
    >
      <Header />
      <Modal
        visible={showWarning}
        transparent
        animationType='slide'
        hardwareAccelerated
        onRequestClose={() => setShowWarning(false)}//now on pressing back button modal closes
      >
        <View style={styles.centred_warning_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_modal_title}>
              <Text style={styles.text}>Warning!</Text>
            </View>
            <View style={styles.warning_modal_body}>
              <Text style={styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_modal_button}
              android_ripple={{ color: '#fff', }}
            >
              <Text style={styles.text}>Ok</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
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
        <MashButton
          title={submitted ? 'Clear' : 'Register'}
          onPressFunction={onPressHandler}
          color='#0f0'
        />
        <MashButton
          title={'Submit'}
          onPressFunction={onPressHandler}
          color='#0ff'
          style={{ margin: 10 }}
        />
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
    textAlign: 'center',
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
  centred_warning_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'//by putting number between 0 to 99 at the end of color hexcode determine the transparent value of that hex color
  },
  warning_modal: {
    backgroundColor: '#ffffff',
    height: 300,
    width: 300,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_modal_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_modal_body: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning_modal_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
  },
});

export default App;
