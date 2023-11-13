import React from 'react';
import { resumeEduSection } from '../../consts/data';

const Edu = ({ isActive }) => {
    return (
        <div hidden={!isActive} className='w-full'>
            {resumeEduSection.map((item, index) =>
                <div key={index} className={`w-full flex-col py-4 gap-3 sm:gap-2 flex`}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-orange-700'>
                            <div className='w-[10px] h-[10px] rounded-full bg-orange-700'></div>
                            <h1 className=' font-bold'>{item.institute}</h1>
                        </div>
                        <div className='text-xs sm:text-sm bg-orange-700 px-2 md:px-6 sm:px-4 py-2 items-center rounded-full text-white'>
                            {item.timePeriod}
                        </div>
                    </div>
                    <h1 className=' text-gray-700 ml-3'>{item.subject}</h1>
                </div>
            )}
        </div>
    )
}

export default Edu;