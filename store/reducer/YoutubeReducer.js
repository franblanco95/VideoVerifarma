import { FETCH_DATA } from "../action/YoutubeActions"

const initialState = {
    data: [],
}

export const youtubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;

    }

}