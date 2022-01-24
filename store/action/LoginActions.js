import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (details) => {
    return async dispatch => {

        const jsonValue = JSON.stringify(details)
        await AsyncStorage.setItem('@user', jsonValue)

        dispatch({
            type: LOGIN,
            ...details
        })
    }
}

export const logout = () => {
    return async dispatch => {

        const user = AsyncStorage.removeItem('@user');

        dispatch({
            type: LOGOUT,
            user
        })
    }
}

export const initAuthentication = () => {
    return async dispatch => {
        const user = await AsyncStorage.getItem('@user');

        if (user !== null) {
            dispatch({
                type: LOGIN,
                user
            })
        }
    }

}
