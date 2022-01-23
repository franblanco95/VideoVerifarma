import { FETCH_DATA, ADD_VIDEO } from "../action/YoutubeActions"

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
        case ADD_VIDEO:
            // const updateArray = [action.newVIdeo]
            console.log(...action.title)
            console.log({ ...action.newVideo })
            // const newVideo = { ...action.title, }
            // const updateVideo = [...state.data, newVideo]
            return (
                state
                // {
                //     title: action.title,
                //     description: action.description,
                //     url: action.url
                // }]

            )

        default:
            return state;

    }

}