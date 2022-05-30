import { createStore ,combineReducers ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer} from '../userReducer/userReducer';
import { postReducer } from '../userReducer/postReducer';
import { albumReducer } from '../userReducer/albumReducer';

// console.log(albumReducer);

const rootreducer = combineReducers({
    userList : userReducer,
    postList : postReducer,
    albumsList : albumReducer
})

const initialState = {}

export const store = createStore(rootreducer,initialState,composeWithDevTools(applyMiddleware(thunk)))