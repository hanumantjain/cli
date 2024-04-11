import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Time from '../components/Time'
import { Link } from 'react-router-dom'
import { FaNetworkWired } from "react-icons/fa";

const lockscreen = () => {

    return (
        <div className='bg-[#2A2D32] h-screen'>
            <div className=' bg-black text-white flex justify-between p-1'>
                <div></div>
                <Time />
                <div className='p-1 px-3' >
                    <FaNetworkWired />
                </div>
            </div>
      
            <div className='text-[#9DA1A2] text-lg flex justify-center py-48'>
                <div>
                    <div className=''>
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                            sequence={[
                                `Hello This is a Welcome Page\n\nCreated by Hanumant Jain\n\nYou can continue by clicking\non the button.`
                            ]}
                        />
                    </div>
                    <div className='py-10'>
                        <Link to="/home"
                            className=' bg-[#232427] border rounded-md p-2 px-32'
                            >
                            Continue
                        </Link>
                    </div>   
                </div>
            </div>
        </div>
      )
}

export default lockscreen