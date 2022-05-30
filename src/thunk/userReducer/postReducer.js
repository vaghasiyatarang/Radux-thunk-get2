import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from "../constants/postConstant";

export const postReducer = (state = { post: [] }, action) => {
    
    switch (action.type) {
        case POST_REQUEST:
            return { loading1: true }

        case POST_SUCCESS:
            return { loading1: false, post: action.payload }

        case POST_ERROR:

            return { loading1: false, error1: action.payload }
            
        default: return state
    }
}