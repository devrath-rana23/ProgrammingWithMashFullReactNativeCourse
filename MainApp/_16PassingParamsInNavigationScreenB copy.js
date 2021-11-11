import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

const ScreenB = ({ navigation, route }) => {

  const { ItemName, ItemId } = route.params;
  const onPressHandler = () => {
    // navigation.goBack();
    navigation.navigate('Screen_A', { Message: 'Message from Screen B', }); //When we navigate using Drawer it will give error

  }
  const onPressUpdateIdHandler = () => {
    navigation.setParams({ ItemId: 14 });
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
      <Pressable
        onPress={onPressUpdateIdHandler}
        style={
          ({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })
        }
      >
        <Text style={styles.text}>
          Update Id
        </Text>
      </Pressable>
      <Text style={styles.text}>
        {ItemName}
      </Text>
      <Text style={styles.text}>
        ID:{ItemId}
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

export default ScreenB;
