import React, { use, useState } from 'react';
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div className='w-screen h-20 z-10 bg-white drop-shadow-lg relative'>
            {/* == Navbar == */}
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                {/* Logo */}
                <div className='flex items-center'>
                    <img src={logo} alt="cwts logo" className='ml-10 ss:ml-10 md:ml-3 opacity-55 w-full h-6' />
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
                    <button className='border-none bg-transparent text-black mr-8'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>

                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <img src={toggle ? close : menu} alt="hambeger bar" className='w-7 h-7 object-contain mr-10' onClick={handleClick} />
                </div>
            </div>

            <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>

                {/* Action buttons */}
                <div className='flex flex-col flex-wrap my-4'>
                    <button className='bg-transparent text-indigo-600 mb-4 py-3 px-8'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}
export default Navbar
