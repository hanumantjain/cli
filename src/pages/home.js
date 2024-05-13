import React, { useState } from 'react'
import Time from '../components/Time'
import { FaNetworkWired } from "react-icons/fa"
import Terminal from '../components/terminal'
import Sidenav from '../components/sidenav'

const Home = () => {
    const [isTerminalClose, setTerminalClose] = useState(true)
    const [placeholder, setPlaceholder] = useState('Enter command')
    const openTerminal = () => {
        setTerminalClose(true)
    }
    const handleContact = () => {
        setPlaceholder('Enter E-mail')
    } 
    
  return (
    <div className='homepage h-screen overflow-hidden'>
        <div className=' bg-black text-white flex justify-between p-1'>
                <div></div>
                <Time />
                <div className='p-1 px-3' >
                    <FaNetworkWired />
                </div>
        </div>

        <div className='flex h-full'>
                <div className='md:flex md:flex-col md:justify-between lg:flex lg:flex-col lg:justify-between hidden'>
                    <div></div>
                        <Sidenav openTerminal={openTerminal} handleContact={handleContact}/>
                    <div></div>
                </div>
        
            <div className='w-full h-full '>
            { isTerminalClose &&  <Terminal 
                                    placeholder={placeholder}
                                    setPlaceholder={setPlaceholder}
                                    onClose={() => setTerminalClose(false)}/>}
            </div>
        </div>
    </div>
  )
}

export default Home