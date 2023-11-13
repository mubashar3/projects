import React, { useState } from 'react';
import images from '../../assets/images';

const LoginScreen = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [loginData, setLoginData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(
            {
                ...loginData,
                [name]: value,
            },
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className=" p-16 relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.loginBg})` }}>
            <div className='p-7 rounded-2xl w-[400px] gap-4 m-auto bg-[#121314] flex flex-col items-center'>
                <p className='font-bold'>Welcome to BrainBytes</p>
                <p className='font-bold text-2xl text-accent'>Login Here</p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <label htmlFor="email" className='flex flex-col'>Email:
                        <input
                            type="text"
                            id='email'
                            name='email'
                            className='p-2 bg-transparent border-b-[1px] focus:outline-none'
                            value={loginData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="password" className='flex flex-col relative'>Password:
                        <input
                            type={`${!visiblePassword ? "password" : "text"}`}
                            name='password'
                            id='password'
                            className='p-2 pr-6 bg-transparent border-b-[1px] focus:outline-none'
                            autoComplete='off'
                            value={loginData.password}
                            onChange={handleChange}
                        />
                        <button onClick={() => { setVisiblePassword(!visiblePassword) }} className='absolute right-1 bottom-2'><img className='w-4' src={`${!visiblePassword ? images.visibility : images.visibilityHide}`} alt="" /></button>
                    </label>
                    <button type="submit" className='btn-accent btn'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
