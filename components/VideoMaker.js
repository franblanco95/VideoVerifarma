import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import colors from '../assets/colors'

const VideoMaker = () => {

    const [video, setVideo] = useState({
        title: '',
        description: '',
        url: ''
    })

    return (
        <View style={styles.videoMakerContainer}>
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setVideo({ ...video, title: text })}
                value={video.title}
                placeholder="Titulo del Video"

            />
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setVideo({ ...video, description: text })}
                value={video.description}
                placeholder="Descripción del video"

            />
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setVideo({ ...video, url: text })}
                value={video.url}
                placeholder="Url del video"
            />

            <TouchableOpacity
                style={styles.videoMakerButton}
            >
                <Text style={styles.videoMakerText}>Subir Video</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VideoMaker;

const styles = StyleSheet.create({
    videoMakerContainer: {
        padding: 20,

    },
    videoMakerInput: {
        backgroundColor: colors.white,
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
    videoMakerButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    videoMakerText: {
        color: colors.white,
        fontWeight: 'bold',
    }
});
