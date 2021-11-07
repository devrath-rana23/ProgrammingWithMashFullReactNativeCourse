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
} from 'react-native';
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  /**
   * syntax for creating state is 
   * const [state_name, state_name_used_when_updating_state] = useState(value);
   * const [state_name, state_name_used_when_updating_state] = useState({field:value, field:value});
   */
  const [name, setName] = useState("Style test!");
  const [clickCount, setClickCount] = useState(0);
  const [session, setSession] = useState({ number: 6, title: 'state' });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName('Style test is done!')
  }

  const onClickChangeState = () => {
    if (current == true) {
      setName('Hello Devrath!');
      setSession({ number: 7, title: 'UpdatedState' });
      setCurrent(false);
    } else {
      setName('Devrath');
      setSession({ number: 6, title: 'state' });
      setCurrent(true);
    }
  }

  const onClickUpdateClickCount = () => {
    let updatedClickCount = clickCount;
    setClickCount(++updatedClickCount);
  }

  return (
    <View style={styles.body}>
      <View style={styles.section1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.section2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.section3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,//value of flex decides the proportion of space elemnt will take, instead of flex we give fix width and height to it's child element then it may break in other devices so flex recommended
  },
  view1: {
    flex: 2,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 3,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 5,
    backgroundColor: '#00fff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#0f2f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#ff4900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1: {
    flex: 0.5,
    flexDirection: 'row',
  },
  section2: {
    flex: 1,
  },
  section3: {
    flex: 3,
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    fontStyle: 'italic',
    color: '#000000'
  },
});

export default App;
