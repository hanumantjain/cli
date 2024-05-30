import React, { useState } from 'react'
import Time from '../components/Time'
import { FaNetworkWired } from "react-icons/fa"
import Terminal from '../components/terminal'
import Sidenav from '../components/sidenav'

const Home = () => {
    const [isTerminalClose, setTerminalClose] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null)
    const [maximized, setMaximized] = useState(false)
    const [minimized, setMinimized] = useState(false)

    const openTerminal = () => {
        setTerminalClose(true)
        setSelectedOption(null)
    }
     
    const handleClose = () => {
        setTerminalClose(false)
        setMaximized(!maximized)
    }

    const openContact = () => {
        setSelectedOption('contact')
    }
    
    const openProjects = () => {
        setSelectedOption('projects')
    }
    const openAbout = () => {
        setSelectedOption('about')
    }

    const handleMaximize = () => {
        setMaximized(!maximized)
    }
    const handleMinimize = () => {
        setMinimized(!minimized)
    }

    return (
        <div className='homepage h-screen overflow-hidden'>
            <div className=' bg-black text-white flex justify-between p-1'>
                <div className='text-black' onClick={()=> console.log(window.ethereum)}><FaNetworkWired /></div>
                <Time />
                <div className='p-1 px-3' >
                    <FaNetworkWired />
                </div>
            </div>

            <div className='flex h-full'>
                {(!maximized || minimized) && (
                    <div className='md:flex md:flex-col md:justify-between lg:flex lg:flex-col lg:justify-between hidden'>
                        <div></div>
                        <Sidenav
                            openTerminal={openTerminal}
                            openContact={openContact}
                            openProjects={openProjects}
                            openAbout={openAbout}
                            handleMinimize={handleMinimize}
                            minimized={minimized}
                        />
                        <div></div>
                    </div>
                )}
                
                <div className='lg:hidden md:hidden'>
                {(!isTerminalClose) && 
                    <div className=''>
                        <div></div>
                        <Sidenav
                            openTerminal={openTerminal}
                            openContact={openContact}
                            openProjects={openProjects}
                            openAbout={openAbout}
                            handleMinimize={handleMinimize}
                            minimized={minimized}
                        />
                        <div></div>
                    </div>
                    
                }
                </div>
        
                <div className='w-full h-full'>
                    {isTerminalClose && (
                        <Terminal 
                            selectedOption={selectedOption}
                            handleClose = {handleClose}
                            handleMaximize={handleMaximize}
                            maximized={maximized}
                            handleMinimize={handleMinimize}
                            minimized={minimized}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
