import { USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/userConstant";


export const userReducer = (state={user:[]},action) =>{
    switch(action.type)
    {
        case USER_REQUEST :
            return {loading:true}

        case USER_SUCCESS : 
            return {loading:false , user:action.payload}

        case USER_FAIL : 
            return {loading:false , error : action.payload}

        default : return state
    }
}