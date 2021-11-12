import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const ScreenA = ({ navigation }) => {

  const Users = [{
    id: 1,
    name: 'User A'
  },
  {
    id: 2,
    name: 'User B'
  },
  {
    id: 3,
    name: 'User C'
  },
  ];

  const [name, setName] = useState('');

  const onPressHandler = () => {
    navigation.navigate('Screen_B',);
  }
  const onPressHandlerForDrawer = () => {
    // navigation.toggleDrawer();
    for (let user of Users) {
      setName(user.name);
    }
  }

  return (
    <View style={styles.body}>
      <Text style={[
        GlobalStyle.CustomFont,
        styles.text
      ]}>
        Screen A
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={GlobalStyle.ButtonText}>
          Screen B
        </Text>
      </Pressable>
      <Pressable
        onPress={onPressHandlerForDrawer}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={styles.text}>
          Get the last user
        </Text>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#000',
    margin: 10,
  },
  button: {
    borderRadius: 50,
  },
});

export default ScreenA;
