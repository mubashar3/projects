import React from 'react';
import { resumeInterestSection } from '../../consts/data';

const Interest = ({ isActive }) => {
    return (
        <div hidden={!isActive} className='w-full'>
            {
                resumeInterestSection.map((item, index) =>
                    <div key={index} className='w-full flex flex-col py-4 '>
                        <div className='flex items-center gap-2'>
                            <div className='w-[10px] h-[10px] rounded-full bg-orange-700'></div>
                            <h1 className=' text-orange-700 font-bold'>{item.title}</h1>
                        </div>
                        <div className='ml-3'>
                            <p>{item.discript}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Interest;
