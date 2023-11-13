import { Send } from '@mui/icons-material'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = () => {
        if (message === '' || email === '')
            return
        const mailto = `mailto:raohuraira331.rb@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;
        window.location.href = mailto;
    };

    return (
        <form className='flex flex-col gap-3 overflow-auto max-h-full'>
            <label className=' w-full'> Name
                <input onChange={(e) => { setName(e.target.value) }} required type="text" className=' bg-[#c5c5c57e] w-full p-2 rounded-lg opacity-70' />
            </label>
            <label className=' w-full'> Email
                <input onChange={(e) => { setEmail(e.target.value) }} required type="email" className=' bg-[#c5c5c57e] w-full p-2 rounded-lg opacity-80' />
            </label>
            <label className=' w-full'> Message
                <textarea onChange={(e) => { setMessage(e.target.value) }} required rows={4} type="text" className=' resize-none bg-[#c5c5c57e] w-full p-2 rounded-lg opacity-70' />
            </label>
            <button type="submit" onClick={sendEmail} className='bg-[#1e293b] w-24 p-2 text-white rounded-lg'> Send <Send /></button>
        </form>
    )
}

export default Form;
