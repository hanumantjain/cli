import React from 'react'
import { Link } from 'react-router-dom';
import { FaNetworkWired } from "react-icons/fa"

const sidenav = () => {
  return (
    <div className="bg-gray-900 w-24 text-white py-5 rounded-lg">
      <div className="flex flex-col gap-4">
          <Link to="/contact" className="hover:text-gray-300">
              <div className='flex flex-col items-center'>
                <FaNetworkWired className='text-3xl' />
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

export default sidenav