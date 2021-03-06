import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import colors from '../assets/colors'
import { login, logout } from '../store/action/LoginActions';

const ProfileScreen = ({ navigation }) => {

    const user = useSelector(state => state.login)

    const dispatch = useDispatch()

    const [details, setDetails] = useState({
        name: '',
        secondName: '',
        email: '',
        username: '',
        nickName: '',
    })

    const loginHandler = (details) => {
        if (details.password !== undefined) {
            dispatch(login(details))
            navigation.navigate('Verifarma')
        } else {
            console.log('Completar Formulario')
        }
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (

        <View style={styles.loginContainer}>

            {(user.active !== false ?

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => logoutHandler()}
                >
                    <Text style={styles.textButton}>Cerrar Sesión</Text>
                </TouchableOpacity> :

                <KeyboardAwareScrollView contentContainerStyle={{ marginTop: 20 }}>
                    <Text style={styles.loginTitle}>Login</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, name: text })}
                        value={details.name}
                        placeholder="Nombre"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, secondName: text })}
                        value={details.secondName}
                        placeholder="Segundo Nombre"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, nickName: text })}
                        value={details.nickName}
                        placeholder="Apodo"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, email: text })}
                        value={details.email}
                        placeholder="Email"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, username: text })}
                        value={details.username}
                        placeholder="Nombre de Usuario"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setDetails({ ...details, password: text })}
                        value={details.password}
                        placeholder="Contraseña"
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => loginHandler(details)}
                    >
                        <Text style={styles.textButton}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>

            )}

        </View >


    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loginTitle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 20,
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
