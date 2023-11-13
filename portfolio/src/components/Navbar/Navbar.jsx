import { Cancel } from '@mui/icons-material';
import React from 'react';

const Navbar = ({ openMenu, setOpenMenu }) => {
    const refhome = () => {
        const ele = document.getElementById("homeRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpenMenu(false);
    }
    const refAbout = () => {
        const ele = document.getElementById("aboutRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpenMenu(false);
    }
    const refResume = () => {
        const ele = document.getElementById("resumeRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpenMenu(false);
    }
    const refContact = () => {
        const ele = document.getElementById("contactRef");
        ele.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpenMenu(false);
    }
    return (
        <div className={`bg-[#1e293b] transition-all duration-500 ease-in-out text-white z-40 h-screen w-[70%] flex flex-col p-4 absolute inset-0 bg-opacity-50 ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>
            <div onClick={() => setOpenMenu((prev) => !prev)} className='cursor-pointer absolute top-12'>
                <Cancel />
            </div>
            <nav className='flex flex-col items-center mt-10 gap-16'>
                <button onClick={refhome} className='cursor-pointer'>Home</button>
                <button onClick={refAbout} className='cursor-pointer'>About Me</button>
                <button onClick={refResume} className='cursor-pointer'>Resume</button>
                <button onClick={refContact} className='cursor-pointer'>Contact Me</button>
            </nav>
        </div>
    )
}

export default Navbar
