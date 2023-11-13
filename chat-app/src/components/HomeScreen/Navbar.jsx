import React from 'react';
import image from '../../assets/image';
import ChatModal from './ChatModal';
import LogoutModal from './LogoutModal';

const Navbar = () => {

    return (
        <div className='h-[70px] flex justify-between items-center px-3 bg-[#1f332e]'>
            <h1 className='text-xl text-[#979797]'>ChiChat</h1>
            <div className='flex gap-6 items-center'>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='w-6 hover:cursor-pointer'>
                    <img src={image.addChat} alt="" />
                </button>
                <ChatModal />
                <button className='w-5 hover:cursor-pointer'>
                    <img className='grayscale brightness-200' src={image.searchIcon} alt="" />
                </button>
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className='w-6 hover:cursor-pointer'>
                    <img className='grayscale ' src={image.logoutIcon} alt="" />
                </button>
                <LogoutModal />
            </div>
        </div>
    )
}

export default Navbar;
