import './App.css';

// installation redux-thunk: 

// redux-devtools-extension
// react-redux
// redux
// redux-thunk
// axios

import { userAction } from './thunk/userAction/userAction';
import { postAction } from './thunk/userAction/postAction';
import {albumsAction} from './thunk/userAction/albumsAction'
import { useSelector, useDispatch } from 'react-redux'
import ListComp from './thunk/component/ListComp';
import PostListComp from './thunk/component/PostListComp';
import AlbumsListcomp from './thunk/component/AlbumsListcomp';

function App() {

  const dispatch = useDispatch();

  const userList = useSelector(state => state.userList)
  const { loading, user, error } = userList;

  const postList = useSelector(state => state.postList)
  const { loading1, post, error1 } = postList
  

  const albumsList = useSelector(state => state.albumsList)

  const {loading3 , albums ,error3} = albumsList
  
  return (
    <div className="App">
      <h1>Redux Thunk</h1>
      <button onClick={() => {dispatch(albumsAction())}}>Albums data</button>
      {loading3 ? <h2>loading...!</h2> : error3 ? <h3>{error3}</h3> : <AlbumsListcomp albums={albums} /> }
      

      


      <br /><br /><hr></hr><br /><br />
      <button onClick={() => { dispatch(userAction()) }} > See Client</button>
      {loading ? <h2 style={{ color: "red" }}>Loading....</h2> : error ? <h3>{error}</h3> :
        <ListComp user={user} />
      }

      <br /><br /><hr></hr><br /><br />

      <button onClick={() => { dispatch(postAction()) }}>Post data</button>
      
      {loading1 ? <h3>Loading ...</h3> : error1 ? <h2>{error1}</h2> : 
        <PostListComp post={post}/>
      }


    </div>
  );
}

export default App;
