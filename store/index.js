import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer/LoginReducer";
import { youtubeReducer } from "./reducer/YoutubeReducer";

const RootReducer = combineReducers({
    login: loginReducer,
    video: youtubeReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))