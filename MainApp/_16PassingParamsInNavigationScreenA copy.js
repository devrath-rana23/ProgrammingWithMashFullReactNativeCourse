import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

const ScreenA = ({ navigation, route }) => {

  const { Message } = route.params;

  const onPressHandler = () => {
    navigation.navigate('Screen_B', { ItemName: 'Item from Screen A', ItemId: 12 }); //When we navigate using Drawer it will give error
    // navigation.navigate('Screen_B');
  }
  const onPressHandlerForDrawer = () => {
    // navigation.openDrawer();
    // navigation.closeDrawer();
    navigation.toggleDrawer();
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
      <Pressable
        onPress={onPressHandlerForDrawer}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={styles.text}>
          Toggle drawer
        </Text>
      </Pressable>
      <Text style={styles.text}>
        {route.params?.Message}
      </Text>
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
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  button: {
    borderRadius: 50,
  },
});

export default ScreenA;
