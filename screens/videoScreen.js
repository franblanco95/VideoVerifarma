import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import StarRating from 'react-native-star-rating';


const VideoScreen = ({ route }) => {

    const { item } = route.params

    const [rating, setRating] = useState(0)

    return (
        <View style={styles.videoContainer}>
            <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            <YoutubePlayer
                height={200}
                width='100%'
                videoId={item.id.videoId}
            />
            <Text style={styles.videoDescription}>{item.snippet.description}</Text>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={rating}
                selectedStar={(rating) => setRating(rating)}
            />
            <Text>{rating}</Text>
        </View>
    );
};

export default VideoScreen;

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    videoTitle: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    videoDescription: {
        marginTop: 10,
    },

});
