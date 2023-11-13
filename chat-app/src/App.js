import { useEffect } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { actionTypes } from './state/Reducer/Reducer';
import { useStateValue } from './state/StateProvider';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user') ?? null);
    dispatch({
      type: actionTypes.SET_USER,
      user: localUser,
    });
  }, []);

  useEffect(() => {
    if (user == null) return;
    const userRef = collection(db, "users");
    const unsub = onSnapshot(userRef, (snapShot) => {
      const users = [];
      snapShot.docs.forEach((doc) => {
        if (doc.data().uid !== user.uid) {
          users.push(doc.data());
        }
      });
      dispatch({
        type: actionTypes.SET_USERS,
        users: users,
      });
    });

    return unsub;
  }, [user]);

  return (
    <div className="App h-screen overflow-auto">
      {
        !user ?
          <LoginScreen /> :
          <HomeScreen />
      }
    </div>
  );
}

export default App;
