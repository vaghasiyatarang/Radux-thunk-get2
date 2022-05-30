import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from "../constants/postConstant";
import axios from 'axios'
export const postAction = () => async (dispatch) => {

    try {
        dispatch({ type: POST_REQUEST })

        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")

        dispatch({ type: POST_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: POST_ERROR, payload: error.message })
        
    }

}