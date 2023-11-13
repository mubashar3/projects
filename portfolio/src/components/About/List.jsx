import React from 'react';

const List = ({ text }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='w-[10px] h-[10px] rounded-full bg-orange-700'></div>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default List
