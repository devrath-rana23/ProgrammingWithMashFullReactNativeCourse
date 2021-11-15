
/**
 * 
 * AsyncStrorage is an unencrypted, asynchronous,persistent, key-value storage system that is gobal to the app.
 * It should be used instead of LocalStorage because AsyncStorage is unencrypted, don't use it to store secret items such as passwords and tokens.
 * One of the advantage of using AsyncSTorage is that you can use it as an offline storage on the user's device, and when the user closes or restarts the app, this storage will not be erased and you can still use its values.
 */

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TextInput, Text, Alert } from 'react-native';
import { ASYNC_STORAGE_IMAGE } from '../assets/images/index';
import CustomButton from '../utils/CustomButtons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    //This wil call the getData() when login screen is loaded and if there is data in 'UserName' key it will redirect to 'Home' page
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        try {
            /** AsyncStorage returns a promise */
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Home');//if we have stored the value in 'UserName' key in AsyncStorage  we don't have to set it again and directly navigate to home screen after login
                    }
                }
                );
        } catch (error) {
            console.log(error);
        }
    }

    /** We use async/await while saving in asyncStorage */
    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.');
        } else {
            try {
                var user = {
                    Name: name,
                    Age: age,
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View
            style={styles.body}
        >
            <Image
                style={styles.logo}
                source={ASYNC_STORAGE_IMAGE}
            >
            </Image>
            <Text
                style={styles.text}
            >
                Async Storage
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => setAge(value)}
            >
            </TextInput>
            <CustomButton
                title='login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }

})

export default Login;