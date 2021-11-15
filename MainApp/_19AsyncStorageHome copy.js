import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButtons';

const Home = ({ navigation }) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //useEffect used for calling getData fn. when Home page opens
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    try {
      /** AsyncStorage returns a promise */
      AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);
            setAge(user.Age);
          }
        }
        );
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        var user={
          Name:name,
      }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Success!', 'Your data has been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  }
  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('UserName');
      await AsyncStorage.clear();//empty the AsyncStorage completely
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.body}>
      <Text style={[
        GlobalStyle.CustomFont,
        styles.text
      ]}>
        Welcome {name} !
      </Text>
      <Text style={[
        GlobalStyle.CustomFont,
        styles.text
      ]}>
        Your age is {age} .
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ener your name"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        title='Update'
        color='#ff7f00'
        onPressFunction={updateData}
      />
      <CustomButton
        title='Remove'
        color='#f40100'
        onPressFunction={removeData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: '#000',
    margin: 10,
  },
  button: {
    borderRadius: 50,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});

export default Home;
