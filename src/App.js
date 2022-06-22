import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';
function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  // to keep log in even we refresh the page
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // is logged out
        dispatch(logout())

      }
    })
    
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? <Login /> : ( 
        <div className="app_body">
          <Sidebar />
          <Feed/>
          <Widgets/>
        </div>
      )}
      {/* App Body */}
      {/* Slicebar */}
    </div>
  );
}

export default App;
