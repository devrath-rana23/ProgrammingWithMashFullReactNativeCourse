import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
 * Navigation container useful functionality:
 * The NavigationContainer is responsible for managing our app state and linking our top-level navigator to the app environment.
 * The container takes care of platform specific integration and provides various useful functionality like=>
 * Deep link integration with linking prop.
 * Notify state changes for screen tracking and state persistence.
 * Handle system back button on Android by using the BackHandler API from React Native.
 */

const Stack = createNativeStackNavigator();

const ScreenA = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    /**if we use the replace function instead of navigate, the current screen will be replaced by the desired screen and will exit the stack itself and we cant navigate to current screen again*/
    // navigation.replace('Screen_B');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={styles.text}>
          Screen B
        </Text>
      </Pressable>
    </View>
  );
}

const ScreenB = ({ navigation }) => {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={styles.text}>
          Go back to Screen A
        </Text>
      </Pressable>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //apply to all screen
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen
          name='Screen_A'
          component={ScreenA}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen
          name='Screen_B'
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  button: {
    borderRadius: 50,
  },
});

export default App;
