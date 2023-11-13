import React from 'react';
import image from '../../assets/image';
const ChatNav = ({ photoUrl, displayName, back }) => {

    return (
        <div className='flex gap-4 justify-center items-center' >
            <button onClick={back} className='w-5'>
                <img className='grayscale brightness-150' src={image.backIcon} alt="back" />
            </button>
            <div className='w-9 h-9 overflow-hidden rounded-full'>
                <img src={photoUrl} alt="img" />
            </div>
            <p>
                {displayName}
            </p>
        </div >
    )
}

export default ChatNav;
