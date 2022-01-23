import { YOUTUBE_KEY_API } from '@env'

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_VIDEO = 'ADD_VIDEO'

export const fetchData = () => {
    return async (dispatch) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react%20native&type=video&key=${YOUTUBE_KEY_API}`)
        const result = await response.json()
        dispatch({
            type: FETCH_DATA,
            payload: result

        })
    }
}

export const addVideo = (newVideo) => ({
    type: ADD_VIDEO,
    ...newVideo
})
