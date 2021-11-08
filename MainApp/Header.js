import React from "react";
import { View, StyleSheet, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>React native tut</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: 50,
        backgroundColor: '#00f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
    },
});

export default Header;