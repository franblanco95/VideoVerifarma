export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (details) => ({
    type: LOGIN,
    ...details
})

export const logout = () => ({
    type: LOGOUT,
})