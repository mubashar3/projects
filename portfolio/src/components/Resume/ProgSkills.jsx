import React from 'react';
import { resumeProgrammingSection } from '../../consts/data';

const ProgSkills = ({ isActive }) => {
    return (
        <div hidden={!isActive} className='w-full flex flex-wrap justify-start'>
            {
                resumeProgrammingSection.map((item, index) =>
                    <div key={index} className='py-2 w-[50%]' >
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[10px] h-[10px] rounded-full bg-orange-700'></div>
                                <h1 className='text-orange-700'>{item.language}</h1>
                            </div>
                            <meter min={0} max={100} value={item.expert} className=' ml-3 w-[60%] h-5' >
                            </meter>
                        </div >
                    </div>
                )
            }
        </div>
    )
}

export default ProgSkills;
