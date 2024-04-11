import React from 'react'
import Time from '../components/Time'
import { FaNetworkWired } from "react-icons/fa"
import Terminal from '../components/terminal'
import Sidenav from '../components/sidenav'

const home = () => {
    
  return (
    <div className='homepage'>
        <div className=' bg-black text-white flex justify-between p-1'>
                <div></div>
                <Time />
                <div className='p-1 px-3' >
                    <FaNetworkWired />
                </div>
        </div>
        <div className='flex'>
            <div className=''>
                <div className=''>
                    <Sidenav />
                </div>
            </div>
            
            <div className=''>
                <div>
                    <Terminal />
                </div>
            </div>
        </div>
    </div>
  )
}

export default home