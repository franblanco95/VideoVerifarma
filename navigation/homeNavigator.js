import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import VideoScreen from '../screens/videoScreen';

const Stack = createNativeStackNavigator();


const homeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Verifarma" component={HomeScreen} />
            <Stack.Screen name="Video" component={VideoScreen} />
        </Stack.Navigator>
    );
};

export default homeNavigator;

const styles = StyleSheet.create({});
