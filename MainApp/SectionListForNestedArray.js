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
 
   const [Items, setItems] = useState([
     { name: 'Item 1' },
     { name: 'Item 2' },
     { name: 'Item 3' },
     { name: 'Item 4' },
     { name: 'Item 5' },
     { name: 'Item 6' },
     { name: 'Item 7' },
   ]);
   const DATA = [
     {
       title: 'Title 1',
       data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
     },
     {
       title: 'Title 2',
       data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
     },
     {
       title: 'Title 3',
       data: ['Item 3-1'],
     },
     {
       title: 'Title 4',
       data: ['Item 4-1', 'Item 4-2'],
     },
   ];
   const [Refreshing, setRefreshing] = useState(false);
 
   const onRefresh = () => {
     setRefreshing(true);
     setItems([...Items, { name: 'Item8' }]);// three dots with array state name will load its assigned value and then add the new item to that state array
     setRefreshing(false);
   }
 
   return (
     <SectionList
       keyExtractor={(item, index) => index.toString()}
       sections={DATA}
       renderItem={({ item }) => (//item refers to internal array items
           <Text style={styles.text}>{item}</Text>
       )}
       renderSectionHeader={({section})=>(
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
 