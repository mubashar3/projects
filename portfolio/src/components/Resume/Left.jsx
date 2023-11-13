import React from 'react'

const Left = ({ image, title, isActive }) => {
    return (
        <div className={`transition-all duration-500 flex items-center h-8 gap-8 py-4 px-[12px] cursor-pointer ${isActive ? 'bg-[#1e293b] rounded-r-full text-white mr-[30%] sm:mr-6' : ''}`}>
            <div className='flex items-center'>
                <img src={image} height={20} width={20} alt="" />
            </div>
            <h1>{title}</h1>
        </div >
    )
}

export default Left;
