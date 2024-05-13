import React from 'react'
import { Link } from 'react-router-dom'
import { FaNetworkWired } from "react-icons/fa"
import { BsFillTerminalFill } from "react-icons/bs"
import { IoMdContact } from "react-icons/io"


const Sidenav = ({openTerminal, handleContact}) => {
  
  const handleClick = () => {
    openTerminal()
  } 
  
  return (
    <div className="bg-gray-900 rounded-lg">
      <div className="flex flex-col gap-5  w-24 text-white py-5 ">
          <Link to="/home" className="hover:text-gray-300" onClick={handleClick}>
              <div className='flex flex-col items-center gap-1'>
                <BsFillTerminalFill className='text-3xl' />
                <div className='text-sm'>Terminal</div>
              </div>
          </Link>
          
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-3xl' />
                <div className='text-sm'>Projects</div>
              </div>
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-3xl' />
                <div className='text-sm'>Resume</div>
              </div>
          </Link>
          
          <Link to="/home" className="hover:text-gray-300" onClick={handleContact}>
              <div className='flex flex-col items-center'>
                <IoMdContact className='text-3xl' />
                <div className='text-sm'>Contact</div>
              </div>
          </Link>
      </div>
    </div>
  )
}

export default Sidenav