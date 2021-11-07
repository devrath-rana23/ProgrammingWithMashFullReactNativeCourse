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

    const [Refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { name: 'Item8' }]);// three dots with array state name will load its assigned value and then add the new item to that state array
        setRefreshing(false);
    }

    return (
        <FlatList
            // keyExtractor can be used if object does'nt have a key
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}//default value is false so no need to mention 
            inverted={false}
            data={Items}
            renderItem={({ item }) => (//it has to be {item} 
                <View style={styles.item}>
                    {/* Key is not required in flatlist to be defined in View component, and it accepts object with string value only so need to make Key value in Items array string */}
                    <Text style={styles.text}>{item.name}</Text>
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
        fontSize: 130,
        fontStyle: 'italic',
        color: '#000000',
    },
});

export default App;
