import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from "react-native";
import MapView from "react-native-maps";

const Map = ({ route }) => {

    const { city, lat, lng } = route.params;

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                {city}
            </Text>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        color: '#000',
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Map;