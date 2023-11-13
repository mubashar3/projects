import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useStateValue } from './state/StateProvider'
import LoginScreen from './Components/LoginScreen/LoginScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

