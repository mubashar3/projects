import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import { useStateValue } from './state/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">

      {/* app body */}
      {!user ? (<Login />) : (
        <div className='app_body'>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path='/' element={
                <>
                  {/* <Sidebar /> */}
                </>
              } />
              <Route path='/chats/:chatId' element={
                <>
                  <Chat />
                </>
              } />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;