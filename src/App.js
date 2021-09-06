import { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header'
import Login from './Login';
import { actionTypes } from './reducer';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets'

function App() {

  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? (<Login/>) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
