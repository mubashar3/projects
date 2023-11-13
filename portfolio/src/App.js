import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import ContactMe from './components/Contact Me/ContactMe';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App h-screen w-full relative flex flex-col gap-4 mb-10">
      <div id='homeRef'>
        <Home openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      <div hidden={!openMenu} onClick={() => setOpenMenu(false)} className='h-full w-full absolute inset-0 bg-black z-30 bg-opacity-30 backdrop-blur-md'></div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div id='aboutRef'>
        <About className='About' />
      </div>
      <div id='resumeRef'>
        <Resume />
      </div>
      <div id='contactRef'>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
