import React from 'react';
import List from "./List";
import { aboutSection } from '../../consts/data';

const HighLights = () => {
    return (
        <div className='flex flex-col gap-2 justify-start text-lg'>
            <h1 className='font-bold'>Here are Few Highlights:</h1>
            {
                aboutSection.highlights.map((item, index) => {
                    return <List key={index} text={item} />
                })
            }
        </div>
    )
}

export default HighLights;