import React from 'react';
import Title from '../Title/Title';
import { Mail } from '@mui/icons-material';
import images from '../../assets/Images';
import Form from './Form';

const ContactMe = () => {
    return (
        <div className='flex flex-col gap-14 justify-center lg:items-center px-8 pb-10'>
            <div>
                <Title title={"Contact Me"} detail={"Lets Keep In Touch"} />
            </div>

            {/* card */}
            <div className='flex-col gap-3 bg-[#1e293b] rounded-xl h-[480px] max-w-full lg:max-w-[80%] flex text-white p-2'>
                <div className='flex items-center gap-3 text-3xl font-bold pl-3'>
                    <h1>Get In Touch</h1>
                    <Mail />
                </div>
                <div className='flex gap-3 h-full'>

                    {/* left */}
                    <div className=' hidden sm:w-1/2 sm:flex sm:items-center'>
                        <div className='flex flex-col opacity-50 mt-7'>
                            <h1 className=' text-lg font-bold'>Send Your Email Here!</h1>
                            <img src={images.mails} alt="mail" className=' object-contain' />
                        </div>
                    </div>

                    {/* right */}
                    <div className=' text-black w-full sm:w-1/2 bg-white rounded-xl p-3'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
