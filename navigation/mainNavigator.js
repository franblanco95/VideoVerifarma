import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/profileScreen';
import homeNavigator from './homeNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors'


const Tab = createBottomTabNavigator();


const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                    tabBarActiveTintColor: colors.primary,
                }}>
                <Tab.Screen
                    name="Videos"
                    component={homeNavigator}
                    options={{
                        tabBarIcon: (props) => (
                            <View style={styles.tabContainer}>
                                <MaterialCommunityIcons color={props.color} name="youtube" size={27} />
                                <Text style={[styles.text, { color: props.color }]}>Videos</Text>
                            </View>)
                    }} />
                <Tab.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: (props) => (
                            <View style={styles.tabContainer}>
                                <MaterialCommunityIcons color={props.color} name="account" size={27} />
                                <Text style={[styles.text, { color: props.color }]}>Perfil</Text>
                            </View>)
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.background,
        height: 100,
    },
    tabContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        paddingTop: 5,
        fontSize: 12,
    }
});
