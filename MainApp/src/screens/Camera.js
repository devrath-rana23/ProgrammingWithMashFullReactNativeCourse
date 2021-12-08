import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { RNCamera } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import CustomButton from "../utils/CustomButtons";
import RNFS from "react-native-fs";//Using the react-native-fs module we want to move the saved image file to the place we have access to

const Camera = () => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    // Here async/await is used so that after saving the image we can see the saved address in the console
    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalCachesDirectoryPath + '/MyTest.jpg';//destination address as one of the default address of this module which is actually inside the data app folder then concatenate the desired name of this photo at the end of this address
            RNFS.moveFile(filePath, newFilePath)//RNFS.moveFile(source address, destination address)
                .then(() => {
                    console.log('Image Moved from--', filePath, '--to-- ', newFilePath);//here after the transfer is complete, I want to display both addresses in console.
                })
                .catch(error => {
                    // if error occurs during tranfer need to display in console
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title="Capture"
                    color='#1eb900'
                    onPressFunction={() => captureHandle()}
                />
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export default Camera;