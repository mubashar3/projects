import React from 'react';
import HighLights from './HighLights';
import Title from '../Title/Title';
import { aboutSection } from '../../consts/data';
import Profile from '../../assets/me.jpg'

const About = () => (
    <div className='flex flex-col gap-14 justify-center items-center px-8 my-10'>
        <Title title={"About Me"} detail={"Why choose Me?"} />

        {/* Card */}
        <div className='flex items-start shadow-lg p-6 max-h-[600px] max-w-full lg:max-w-[80%] justify-start sm:justify-center gap-6 md:gap-14 rounded-xl overflow-hidden'>
            <div className='rounded-xl overflow-hidden max-w-[150px] sm:max-w-[200px] md:max-w-[300px] sm:block'>
                <img className='w-full h-full object-contain' src={Profile} alt="profile" />
            </div>
            <div className='flex text-justify items-start h-full gap-4 md:gap-10 flex-col py-2'>
                <p className='text-xs sm:text-sm'>{aboutSection.graduation}</p>
                <div className='hidden sm:block text-xs sm:text-sm md:text-lg lg-text-2xl'>
                    <HighLights />
                </div>
            </div>
        </div>
        <div className='block sm:hidden text-2xl'>
            <HighLights />
        </div>
    </div>
)

export default About
