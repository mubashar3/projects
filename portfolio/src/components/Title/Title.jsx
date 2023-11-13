import React from 'react';

const Title = ({ title, detail }) => {
    return (
        <div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className=' text-2xl xl:text-4xl font-bold'>{title}</h1>
                <h1 className='md:text-1xl lg:text-2xl'>{detail}</h1>
                <div className=' w-40 bg-black h-[1px] flex justify-center items-center'>
                    <div className=' bg-orange-700 w-[20%] p-1 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Title
