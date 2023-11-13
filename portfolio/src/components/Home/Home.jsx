import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Profile from './Profile';
import footer from '../../assets/shape-bg.png';
import { homeSection } from '../../consts/data';



const Home = ({ setOpenMenu, openMenu, }) => {

    const refhome = () => {
        const ele = document.getElementById("homeRef");
        ele.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    const refAbout = () => {
        const ele = document.getElementById("aboutRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const refResume = () => {
        const ele = document.getElementById("resumeRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const refContact = () => {
        const ele = document.getElementById("contactRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div id='home' className=' flex flex-col justify-center gap-6 sm:gap-14 bg-[#1e293b]'>
            <div className='relative flex text-white justify-evenly items-center mt-10'>
                <div hidden={openMenu} onClick={() => setOpenMenu((prev) => !prev)} className='absolute left-6 sm:hidden cursor-pointer'>
                    <MenuIcon />
                </div>
                <h1 className='text-4xl flex-1 sm:flex-0 text-center sm:text-left font-bold text-white'>{homeSection.name}</h1>
                <nav className='hidden flex-1 sm:gap-4 md:gap-10 sm:flex'>
                    <button onClick={refhome} className='cursor-pointer hover:text-orange-700'>Home</button>
                    <button onClick={refAbout} className='cursor-pointer hover:text-orange-700'>About Me</button>
                    <button onClick={refResume} className='cursor-pointer hover:text-orange-700'>Resume</button>
                    <button onClick={refContact} className='cursor-pointer hover:text-orange-700'>Contact Me</button>
                </nav>
            </div>
            <Profile />
            <div className=' w-full h-24'>
                <img className=' w-full h-24' src={footer} alt="" />
            </div>

        </div>
    )
}

export default Home;
