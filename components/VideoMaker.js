import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../assets/colors'
import { addVideo } from '../store/action/YoutubeActions';

const VideoMaker = () => {

    const dispatch = useDispatch()

    const [newVideo, setNewVideo] = useState({
        title: '',
        description: '',
        url: ''
    })

    const uploadVideoHandler = () => {
        dispatch(addVideo(newVideo))
    }

    return (
        <View style={styles.videoMakerContainer}>
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setNewVideo({ ...newVideo, title: text })}
                value={newVideo.title}
                placeholder="Titulo del Video"

            />
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setNewVideo({ ...newVideo, description: text })}
                value={newVideo.description}
                placeholder="Descripción del video"

            />
            <TextInput
                style={styles.videoMakerInput}
                onChangeText={text => setNewVideo({ ...newVideo, url: text })}
                value={newVideo.url}
                placeholder="Url del video"
            />

            <TouchableOpacity
                style={styles.videoMakerButton}
                onPress={() => uploadVideoHandler()}
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
