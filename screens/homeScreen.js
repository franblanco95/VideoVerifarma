import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.homeContainer}>
            <Text>Home Screen</Text>
            <YoutubePlayer
                height={170}
                width={300}
                videoId={"PMX6GP1TXGo"}
            />

            <Button title='Go to Video' onPress={() => navigation.navigate('Video')} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
