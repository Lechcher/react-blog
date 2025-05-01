import React, { use, useState } from 'react';
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div className='relative z-10 w-screen h-20 bg-white drop-shadow-lg'>
            {/* == Navbar == */}
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                {/* Logo */}
                <div className='flex items-center'>
                    <img src={logo} alt="cwts logo" className='ml-10 w-full h-6 ss:ml-10 md:ml-3 opacity-55' />
                </div>
                {/* Navigator */}
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                {/* Action buttons */}
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='mr-8 text-black bg-transparent border-none'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>

                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <img src={toggle ? close : menu} alt="hambeger bar" className='object-contain mr-10 w-7 h-7' onClick={handleClick} />
                </div>
            </div>

            <ul className={toggle ? 'absolute px-8 w-full bg-white md:hidden' : 'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>

                {/* Action buttons */}
                <div className='flex flex-col flex-wrap my-4'>
                    <button className='px-8 py-3 mb-4 text-indigo-600 bg-transparent'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}
export default Navbar
