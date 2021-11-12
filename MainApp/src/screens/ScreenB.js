import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const ScreenB = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.goBack();

  }

  return (
    <View style={styles.body}>
      <Text style={[
        GlobalStyle.CustomFont,
        styles.text
      ]}>
        Screen B
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={GlobalStyle.ButtonText}>
          Go back to Screen A
        </Text>
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
    // fontWeight: 'bold',can't use with font-family
    color: '#000',
    margin: 10,
  },
  button: {
    borderRadius: 50,
  },
});

export default ScreenB;
