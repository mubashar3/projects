import React from 'react';
import image from '../../assets/image';


const Empty = () => {
    return (
        <div className='h-screen flex flex-col gap-6 items-center justify-center'>
            <img src={image.emptyChat} alt="Not Found" className='h-16 grayscale brightness-150 opacity-40' />
            <h1 className='opacity-40 font-bold'>Empty Chats</h1>
        </div>
    )
}

export default Empty
