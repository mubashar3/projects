import React from 'react';
import Typical from 'react-typical';
import profile from '../../assets/me.jpg';
import { GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import resume from '../../assets/CV.pdf'
import { homeSection } from '../../consts/data';


const Profile = () => {
    return (
        <div className=' m-auto w-[100%] items-center gap-4 flex-col-reverse sm:justify-center flex sm:flex-row sm:text-xs md:text-sm max-w-full lg:max-w-[70%]'>
            <div className='flex px-3 flex-col items-center gap-6 sm:gap-10 justify-between w-[100%] sm:w-1/2'>
                <div className='flex justify-center gap-2'>
                    <a href='https://wa.me/<+923191075382>' className='text-white' target='_blank' rel="noreferrer">
                        <WhatsApp />
                    </a>
                    <a href={homeSection.SocLinks[0]} className='text-white' target='_blank' rel="noreferrer">
                        <Instagram />
                    </a>
                    <a href={homeSection.SocLinks[1]} className='text-white' target='_blank' rel="noreferrer">
                        <LinkedIn />
                    </a>
                    <a href={homeSection.SocLinks[2]} className='text-white' target='_blank' rel="noreferrer">
                        <GitHub />
                    </a>
                </div>

                <div>
                    <Typical className='font-bold text-orange-700 text-2xl'
                        loop={Infinity}
                        wrapper='h1'
                        steps={homeSection.profession}
                    />
                </div>
                <div className=' p-6 text-center text-white'>
                    {homeSection.work}
                </div>
                <div className='flex justify-evenly w-full sm:justify-center sm:gap-6'>
                    <a href="mailto:raohuraira331.rb@gmail.com">
                        <button className='w-36 p-2 text-white border-white border rounded-full'>Hire Me</button>
                    </a>
                    <a href={resume} download="resume_pdf" target="_blank"
                        rel="noopener noreferrer">
                        <button className='w-36 p-2  border rounded-full bg-orange-700 text-white' >Get Resume</button>
                    </a>
                </div>
            </div>
            <div className=' w-1/2 flex items-center justify-center rounded-full overflow-hidden '>
                <img className=' h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px] object-cover rounded-full' src={profile} alt="profile" />
            </div>

        </div>
    )
}

export default Profile;
