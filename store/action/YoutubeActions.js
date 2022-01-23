import {YOUTUBE_API_KEY} from '@env'

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
    return async (dispatch) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react%20native&type=video&key=${YOUTUBE_API_KEY}`)
        const result = await response.json()
        dispatch({
            type: FETCH_DATA,
            payload: result

        })
    }
}

export const addVideo = () => {
    
}