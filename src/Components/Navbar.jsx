import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>

        <div className='px-2 flex justify-between items-center w-full h-full '>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
                    APPLIED
                </h1>
            </div>

        </div>

        <AiOutlineMenu  className='h-6 w-6 text-gray-900'/>
        <AiOutlineClose className='h-6 w-6 text-gray-900'/>
    </div>
  )
}

export default Navbar