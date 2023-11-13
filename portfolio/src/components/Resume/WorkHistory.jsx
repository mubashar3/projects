import React from 'react';
import { resumeWorkSection } from '../../consts/data';

const WorkHistory = ({ isActive }) => {
    return (
        <div hidden={!isActive}>
            {
                resumeWorkSection.map((item, index) =>
                    <div key={index} className={`flex flex-col py-8 gap-4`} >
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 text-orange-700'>
                                <div className='w-[10px] h-[10px] rounded-full bg-orange-700'></div>
                                <h1 className=' font-bold'>{item.workPlace}</h1>
                            </div>
                            <h6 className=' bg-orange-700 md:px-6 px-2 sm:px-4 py-2 text-xs sm:text-sm items-center rounded-full text-white'>
                                {item.timePeriod}
                            </h6>
                        </div>
                        <div className='ml-4 flex flex-col gap-3'>
                            <h1 className=' font-semibold text-gray-700'>{item.Working}</h1>
                            {/* <p>Currently working as MERN stack web and mobile developer</p> */}
                        </div>
                        <div className='ml-4 flex flex-col gap-2'>
                            {resumeWorkSection[index].works.map((item, index) =>
                                <div key={index} className='flex'>
                                    <li className=' text-orange-700'></li>
                                    <div>
                                        {item}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div >
                )}
        </div>
    )
}

export default WorkHistory
