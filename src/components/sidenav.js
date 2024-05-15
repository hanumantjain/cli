import React from 'react'
import { BsFillTerminalFill } from "react-icons/bs"
import { IoMdContact } from "react-icons/io"

const Sidenav = ({ openTerminal, openAbout, openContact, openProjects }) => {

    return (
        <div className="bg-gray-900 rounded-lg">
            <div className="flex flex-col gap-5  w-24 text-white py-5 ">
                <div onClick={openTerminal} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center gap-1'>
                        <BsFillTerminalFill className='text-3xl' />
                        <div className='text-sm'>Terminal</div>
                    </div>
                </div>

                <div onClick={openAbout} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <IoMdContact className='text-3xl' />
                        <div className='text-sm'>About</div>
                    </div>
                </div>

                <div onClick={openProjects} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <IoMdContact className='text-3xl' />
                        <div className='text-sm'>Resume</div>
                    </div>
                </div>
                
                <div onClick={openProjects} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <IoMdContact className='text-3xl' />
                        <div className='text-sm'>Projects</div>
                    </div>
                </div>

                <div onClick={openContact} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <IoMdContact className='text-3xl' />
                        <div className='text-sm'>Contact</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
