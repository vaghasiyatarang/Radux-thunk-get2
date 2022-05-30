import { AL_REQUEST , AL_SUCCESS , AL_ERROR} from '../constants/albumsConstant'
import axios from 'axios'

export const albumsAction = () => async(dispatch) => {
    try {
        dispatch({type:AL_REQUEST})

        const res = await axios.get("https://jsonplaceholder.typicode.com/albums") 

        dispatch({type: AL_SUCCESS,payload : res.data})

        
    } catch (error) {
        dispatch({type:AL_ERROR , payload : error.message})
    }
}