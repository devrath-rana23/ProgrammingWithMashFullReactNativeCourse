import React from "react";
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#ddd' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    },
    button: {
        marginVertical: 10,
        padding:10,
        borderRadius:7,
        alignItems: 'center',
    },
});

export default CustomButton;