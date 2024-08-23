import React from 'react'
import { BsFillTerminalFill } from "react-icons/bs"
import { GoDotFill } from "react-icons/go"
import { IoMdContact } from "react-icons/io"
import { FaFileAlt } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { GrProjects } from "react-icons/gr"

const Sidenav = ({ openTerminal, openAbout, openContact, openProjects, handleMinimize, minimized, openResume }) => {

    return (
        <div className="bg-gray-900 rounded-lg">
            <div className="flex flex-col gap-5  w-24 text-white py-5 ">
                <div onClick={ () => minimized ? handleMinimize() : openTerminal()} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center gap-1'>
                        <BsFillTerminalFill className='text-3xl' />
                        <div className='text-sm'>Terminal</div>
                        {minimized && <div><GoDotFill /></div>}
                    </div>
                </div>

                <div onClick={ () => {
                        openTerminal()
                        openAbout()
                    }} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <IoMdContact className='text-3xl' />
                        <div className='text-sm'>About</div>
                    </div>
                </div>

                <div onClick={openResume} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <FaFileAlt className='text-3xl' />
                        <div className='text-sm'>Resume</div>
                    </div>
                </div>
                
                <div onClick={ () => {
                        openTerminal()
                        openProjects()
                    }} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <GrProjects className='text-3xl' />
                        <div className='text-sm'>Projects</div>
                    </div>
                </div>

                <div onClick={ () => {
                        openTerminal()
                        openContact()
                    }} className="hover:text-gray-300 cursor-pointer">
                    <div className='flex flex-col items-center'>
                        <MdOutlineMailOutline className='text-3xl' />
                        <div className='text-sm'>Contact</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
