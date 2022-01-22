import { createStore, combineReducers } from "redux";
import loginReducer from "./reducer/LoginReducer";

const RootReducer = combineReducers({
    login: loginReducer,
})

export default createStore(RootReducer)