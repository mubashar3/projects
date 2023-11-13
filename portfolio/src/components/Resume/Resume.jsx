import React, { useState } from 'react'
import Title from '../Title/Title';
import Left from './Left';
import Edu from "./Edu";
import WorkHistory from './WorkHistory';
import ProgSkills from './ProgSkills'
import Projects from './Projects'
import { resumeSection } from '../../consts/data';
import Interest from './Interest';


const Resume = () => {
    const [selectedItem, setSelectedItem] = useState(resumeSection[0]);

    const handleActive = (index) => {
        if (index !== selectedItem.index) {
            setSelectedItem(resumeSection[index]);
        }
    }
    return (
        <div className='flex flex-col gap-14 justify-center items-center px-8 my-10'>
            <div>
                <Title title={"Resume"} />
            </div>
            <div className='flex flex-col shadow-lg sm:flex-row w-full sm:h-[400px] sm:text-xs md:text-sm max-w-full lg:max-w-[80%]'>
                {/* left section*/}
                <div className='relative justify-center flex flex-col border-r-2 border-gray-200 gap-6 py-4 sm:w-[35%]'>
                    <div className='absolute -z-10 h-full w-12 inset-0 bg-[#1e293b]'></div>
                    {resumeSection.map((item, index) => {
                        const { image, title } = item;
                        return <button key={index} onClick={() => handleActive(index)}>
                            <Left image={image} title={title} isActive={index === selectedItem.id} />
                        </button>
                    })}
                </div>


                {/* right section */}
                <div className='w-[65%] py-6 px-6 hidden sm:block h-full overflow-auto sm:text-xs md:text-sm lg:text-lg'>
                    <div >
                        <Edu isActive={selectedItem.id === 0} />
                        <WorkHistory isActive={selectedItem.id === 1} />
                        <ProgSkills isActive={selectedItem.id === 2} />
                        <Projects isActive={selectedItem.id === 3} />
                        <Interest isActive={selectedItem.id === 4} />
                    </div>
                </div>
            </div>
            <div className='h-[300px] text-xs overflow-auto block px-2 w-full sm:hidden'>
                <Edu isActive={selectedItem.id === 0} />
                <WorkHistory isActive={selectedItem.id === 1} />
                <ProgSkills isActive={selectedItem.id === 2} />
                <Projects isActive={selectedItem.id === 3} />
                <Interest isActive={selectedItem.id === 4} />
            </div>
        </div>
    )
}

export default Resume;
