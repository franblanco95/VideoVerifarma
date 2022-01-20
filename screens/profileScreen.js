import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from '../assets/colors'

const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [nickName, setNickName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.profileContainer}>
            <Text style={styles.loginTitle}>Login</Text>

            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Nombre"

            />
            <TextInput
                style={styles.input}
                onChangeText={setSecondName}
                value={secondName}
                placeholder="Segundo Nombre"

            />
            <TextInput
                style={styles.input}
                onChangeText={setNickName}
                value={nickName}
                placeholder="Apodo"

            />
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Nombre de Usuario"

            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Contraseña"
            />

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    loginTitle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        // height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },
    textButton: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    }
});
