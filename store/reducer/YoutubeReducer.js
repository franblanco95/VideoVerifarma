import { FETCH_DATA, ADD_VIDEO } from "../action/YoutubeActions"

const initialState = {
    data: [],
    newData: [],
}

export const youtubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_VIDEO:
            // const updatedData = [...state, action.newVideo]

            // return {
            //     ...state,
            //     data: updatedData,
            // }

            const updateData = [...state.newData, action.newVideo]
            return {
                ...state,
                newData: updateData,
            }

        default:
            return state;

    }

}