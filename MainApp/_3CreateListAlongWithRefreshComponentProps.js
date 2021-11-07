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
  ScrollView,
  RefreshControl,
} from 'react-native';
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  const [Items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh=()=>{
    setRefreshing(true);
    setItems([...Items, {key:8, item: 'Item8'}]);// three dots with array state name will load its assigned value and then add the new item to that state array
    setRefreshing(false);
  }

  return (
    <ScrollView horizontal={false}
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#0000ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              {/* We need a key because in a list each item should have a unique key so that it will not give a unique key warning */}
              <Text style={styles.text}>{object.item}</Text>
            </View>
          );
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item: {
    margin: 10,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 130,
    fontStyle: 'italic',
    color: '#000000',
  },
});

export default App;
