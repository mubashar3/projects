import React from 'react';
import { resumeProjectsSection } from '../../consts/data';
const Projects = ({ isActive }) => {
    return (
        <div hidden={!isActive} className='w-full'>
            {
                resumeProjectsSection.map((item, index) =>
                    <div key={index} className=' flex flex-col gap-2 py-3 sm:text-xs md:text-sm'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='w-[10px] h-[10px] rounded-full items-center bg-orange-700'></div>
                                    <h1 className=' text-orange-700 text-lg'>{item.title}</h1>
                                </div>
                            </div>
                            <div className=' bg-orange-700 md:px-7 px-3 sm:px-5 py-2 items-center rounded-full text-white'>
                                {item.time}
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h1 className=' font-bold text-xs sm:text-sm md:text-xl text-gray-700'>{item.tech}</h1>
                            <p>{item.details}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Projects;
