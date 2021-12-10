import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import PushNotification from "react-native-push-notification";
import { CHECKLIST_IMAGE } from "../assets/images/index";
import GlobalStyle from "../utils/GlobalStyle";

const Splash = ({ navigation }) => {

    //Navigate from this page to ToDo after specified time using setTimeout
    useEffect(() => {
        createChannels();
        setTimeout(() => {
            navigation.replace('My Tasks');
        }, 2000);
    }, [])

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "task-channel",
                channelName: "Task Channel"
            }
        )
    }

    return (
        <View
            style={styles.body}
        >
            <Image
                style={styles.logo}
                source={CHECKLIST_IMAGE}
            >
            </Image>
            <Text
                style={
                    GlobalStyle.CustomFontBig,
                    styles.text
                }
            >
                Devrath To-Do List
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})

export default Splash;