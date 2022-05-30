import { AL_REQUEST, AL_SUCCESS, AL_ERROR } from '../constants/albumsConstant'

export const albumReducer = (state = { albums: [] }, action) => {
    switch (action.type) {
        case AL_REQUEST:
            return {
                loading3: true
            }
        case AL_SUCCESS:
            return {
                loading3: false, albums: action.payload
            }
        case AL_ERROR:
            return {
                loading3: false, error3: action.payload
            }

        default : return state
    }
}