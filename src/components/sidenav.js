import React from 'react'
import { Link } from 'react-router-dom';
import { FaNetworkWired } from "react-icons/fa"
import { BsFillTerminalFill } from "react-icons/bs"


const Sidenav = ({openTerminal}) => {
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
                <FaNetworkWired className='text-4xl' />
                Contact
              </div>
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-4xl' />
                Contact
              </div>
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-4xl' />
                Contact
              </div>
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-4xl' />
                Contact
              </div>
          </Link>
 


      </div>
    </div>
  )
}

export default Sidenav