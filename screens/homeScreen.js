import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../assets/colors'
import YoutubePlayer from "react-native-youtube-iframe";
import VideoMaker from '../components/VideoMaker';
import { fetchData } from '../store/action/YoutubeActions';


const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.login);
    const videosYoutube = useSelector(state => state.video);
    console.log(videosYoutube)
    const video = videosYoutube.data.items;
    console.log(video)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.homeContainer}>
            {(user.active !== false ?

                <VideoMaker />
                :

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text style={styles.loginTextButton}>Iniciar Sesion para subir videos</Text>
                </TouchableOpacity>

            )}
            <View>


                {video?.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.videoContainer}
                        onPress={() => navigation.navigate('Video', { item })}
                    >
                        <Text style={styles.videoTitle}>{item.snippet.title}</Text>
                        {/* <YoutubePlayer
                            height={170}
                            width={300}
                            videoId={item.id.videoId}
                        /> */}
                        <Image
                            source={{ uri: `https://i.ytimg.com/vi/${item.id.videoId}/default.jpg` }}
                            style={{ height: 90, resizeMode: 'contain', margin: 5 }}
                        />

                        <Text style={styles.videoDescription}>{item.snippet.description}</Text>
                    </TouchableOpacity>
                ))
                }
            </View>
        </ScrollView >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        justifyContent: 'center',
    },
    videoContainer: {
        backgroundColor: colors.primary,
        marginVertical: 15,
        padding: 15,
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
    loginButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    loginTextButton: {
        color: colors.white,
        fontWeight: 'bold',
    }

});
