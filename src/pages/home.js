import React, { useState } from 'react'
import Time from '../components/Time'
import { FaNetworkWired } from "react-icons/fa"
import Terminal from '../components/terminal'
import Sidenav from '../components/sidenav'

const Home = () => {
    const [isTerminalClose, setTerminalClose] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null)

    const openTerminal = () => {
        setTerminalClose(true)
        setSelectedOption(null)
    }

    const openContact = () => {
        setSelectedOption('contact');
    }
    
    const openProjects = () => {
        setSelectedOption('projects');
    }
    const openAbout = () => {
        setSelectedOption('about')
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
                    <Sidenav
                        openTerminal={openTerminal}
                        openContact={openContact}
                        openProjects={openProjects}
                        openAbout={openAbout}
                    />
                    <div></div>
                </div>
        
                <div className='w-full h-full '>
                    { isTerminalClose &&  
                        <Terminal 
                            selectedOption={selectedOption}
                            onClose={() => setTerminalClose(false)}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
