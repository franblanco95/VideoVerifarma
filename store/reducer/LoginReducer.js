import { LOGIN, LOGOUT } from "../action/LoginActions"

const initialState = {
    name: '',
    secondName: '',
    email: '',
    username: '',
    nickName: '',
    password: '',
    active: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                name: action.name,
                secondName: action.secondName,
                email: action.email,
                username: action.username,
                nickName: action.nickName,
                password: action.password,
                active: true,
            }
        case LOGOUT:
            return {
                ...state,
                name: '',
                secondName: '',
                email: '',
                username: '',
                nickName: '',
                password: '',
                active: false,
            }
        default:
            return state;

    }
}

export default loginReducer