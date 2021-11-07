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
  FlatList,
  SectionList,
} from 'react-native';
/**
 * 
 * @returns state is mutable but props are immutable.
 */
const App = () => {

  const [DATA, setItems] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...DATA, {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    }]);
    setRefreshing(false);
  }

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (//item refers to internal array items
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#0000ff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item: {
    margin: 10,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100,
    fontStyle: 'italic',
    color: '#000000',
  },
});

export default App;
