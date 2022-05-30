import { USER_REQUEST, USER_FAIL, USER_SUCCESS } from "../constants/userConstant"
import axios from 'axios'

export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: USER_REQUEST })

        const res = await axios.get("https://jsonplaceholder.typicode.com/users")

        dispatch({ type: USER_SUCCESS ,payload:res.data })
    } catch (error) {
        dispatch({type:USER_FAIL,
            payload : error.message })
    }
}