import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import videos from '../constants/videos'
import YoutubePlayer from "react-native-youtube-iframe";
import colors from '../assets/colors'
import { useSelector } from 'react-redux';
import VideoMaker from '../components/VideoMaker';

const HomeScreen = ({ navigation }) => {

    const user = useSelector(state => state.login)
    console.log(user)

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

                {videos.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.videoContainer}
                        onPress={() => navigation.navigate('Video')}
                    >
                        <Text style={styles.videoTitle}>{item.title}</Text>
                        <YoutubePlayer
                            height={170}
                            width={300}
                            videoId={item.url}
                        />
                        <Text style={styles.videoDescription}>{item.description}</Text>
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
