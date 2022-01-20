import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const VideoScreen = () => {
    return (
        <View style={styles.videoContainer}>
            <Text >Hola soy Video Screen</Text>
        </View>
    );
};

export default VideoScreen;

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
