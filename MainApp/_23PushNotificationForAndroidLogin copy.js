import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TextInput, Text, Alert } from 'react-native';
import { ASYNC_STORAGE_IMAGE } from '../assets/images/index';
import CustomButton from '../utils/CustomButtons';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions'
import PushNotification from "react-native-push-notification";

//Using below function the database file is created and we open it in db constant. This method can also be used to open pre-built databases.
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

const Login = ({ navigation }) => {

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    //This wil call the getData() when login screen is loaded and if there is data in 'UserName' key it will redirect to 'Home' page
    useEffect(() => {
        createTable(),//this will create table if doesn't exist at the beginning of page loading
            getData();
        createChannels();
    }, [])

    /** use below function to create the desired table in the database. 
     * To run a query inside the database, we use this structure by the transaction method.
     * 
    */
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS'
                + 'Users'
                + '(ID INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT, Age INTEGER);'
            )
        })
    }

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

    const getData = () => {
        try {
            /** AsyncStorage returns a promise */
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');//if we have stored the value in 'UserName' key in AsyncStorage  we don't have to set it again and directly navigate to home screen after login
            //         }
            //     }
            //     );
            db.transaction((tx) => {
                tx.executeSql(
                    'SELECT Name,Age FROM Users',
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })
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
                dispatch(setName(name));
                dispatch(setAge(age));
                // var user = {
                //     Name: name,
                //     Age: age,
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                /**Use database to save values instead of async storage */
                await db.transaction(async (tx) => {
                    // await tx.executeSql(
                    //     'INSERT INTO Users (Name,Age) VALUES (' + name + ', ' + age + ')'
                    // );
                    await tx.executeSql(
                        'INSERT INTO Users (Name,Age) VALUES (?,?)',
                        [name, age]
                    );
                })
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    /*REDUX
    Redux is a predictable state container for JavaScript apps.
    As application grows it is difficult to organize and maintain data flow.
    Redux solves this problem by managing application's state with a single global object called Store.
    Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.
    The Redux architecture is based on following components:
    ACTIONS: Actions are a plain JavaScript object that contains information.
    Actions are the only source of information for the store and have a type field that tells what kind of action to perform.
    Reducers: Actions only tell what to do, but they don't tell how to do, so reducers are the pure functions that take the current state and action and return the new state and tell the pure functions that take the current state and action and return the new state and tell the store how to do.
    STORE: The store is the object which holds the state of the application.

    npm install redux
    npm install react-redux
    npm install redux-thunk

    */

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
                Redux
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
            >
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => dispatch(setAge(value))}
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