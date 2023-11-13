import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen flex flex-col gap-2 items-center justify-center'>
            {/* <div className="loading loading-spinner loading-lg"></div> */}
            <span className="loading loading-spinner loading-lg"></span>
            <span className='flex justify-center items-center gap-2'>Loading...</span>
        </div>
    )
}

export default Loader;
