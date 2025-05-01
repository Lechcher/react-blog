import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaTwitch } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 py-8'>
            <div>
                <h4 className='py-2 font-bold uppercase'>Solutions</h4>
                <ol>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                </ol>
            </div>
            <div>
                <h4 className='py-2 font-bold uppercase'>Solutions</h4>
                <ol>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                </ol>
            </div>
            <div>
                <h4 className='py-2 font-bold uppercase'>Solutions</h4>
                <ol>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                </ol>
            </div>
            <div>
                <h4 className='py-2 font-bold uppercase'>Solutions</h4>
                <ol>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Marketing</li>
                </ol>
            </div>
            <div className='col-span-2 pt-2 md:pt-2'>
                <h6 className='font-bold uppercase'>Subcribe To Our Newsletter</h6>
                <p className='py-4'>The lastest news, article, and resources sent to your inbox weekly.</p>
                <form className='flex flex-col gap-4 sm:flex-row' onSubmit={(e) => e.preventDefault()}>
                    <input className='p-2 mb-2 w-full text-black rounded-md border border-indigo-600 outline-none bg-zinc-300' type='email' placeholder='Enter your email...' />
                    <button className='p-2 mb-2 bg-[#00B86E] hover:text-white hover:opacity-80'>Subcribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
            <p>2025 CWTS, LLC. All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook />
                <FaGithub />
                <FaTwitter />
                <FaTwitch />
            </div>
        </div>
    </div>
  )
}

export default Footer