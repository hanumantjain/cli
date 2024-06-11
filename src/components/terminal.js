import React, { useEffect, useState, useRef } from 'react'
import Draggable from 'react-draggable'
import { BsFillTerminalFill } from "react-icons/bs"
import { MdClose } from 'react-icons/md'
import TerminalInput from './terminalInput'
import { VscChromeMaximize } from "react-icons/vsc"
import { VscChromeMinimize } from "react-icons/vsc"
import { handleCommand } from '../utils/commands'

const Terminal = ({ handleClose, selectedOption, handleMaximize, maximized, handleMinimize, minimized }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const terminalRef = useRef(null)
  const draggableRef = useRef(null)

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const clearInput = () => {
    setInput('')
    setHistory([])
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setHistory(prevHistory => [
        ...prevHistory,
        <div key={prevHistory.length}>
          <span className='text-blue-500'>user@kali:~$</span> {input}
        </div>
      ])
      handleCommand(input, setHistory)
      setInput('')
    }
  }

  const handleFiles = () => {
    setInput('')
    setInput('ls')
    setHistory((prevHistory) => [
      ...prevHistory,
      <div key={prevHistory.length}>
        <span className='text-blue-500'>user@kali:~$</span>ls
      </div>,
    ])
    handleCommand('ls', setHistory)
    setInput('')
  }

  const handleHelp = () => {
    setInput('')
    setInput('help')
    setHistory((prevHistory) => [
      ...prevHistory,
      <div key={prevHistory.length}>
        <span className='text-blue-500'>user@kali:~$</span>help
      </div>,
    ])
    handleCommand('help', setHistory)
    setInput('')
  }


  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const isMobile = window.innerWidth <= 768

  return (
    <div className={`w-full h-full overflow-hidden relative flex justify-center items-center ${minimized ? 'hidden' : ''}`}>
      {isMobile ? (
        <div ref={draggableRef} className={`h-full w-full ${maximized ? 'h-full w-full' : 'h-full w-full md:w-2/3 md:h-2/3 lg:w-2/3 lg:h-2/3'}`}>
          <div className='flex flex-col rounded-xl bg-gray-900 text-white font-mono h-full bg-opacity-40'>
            <div className='flex items-center justify-between bg-gray-800 px-4 py-2'>
              <div>
                <BsFillTerminalFill />
              </div>
              <div className='text-sm'>user</div>
              <div className=' cursor-pointer flex gap-2'>
                <div onClick={handleClose}>
                  <MdClose />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-8 bg-gray-800 px-4 py-2'>
              <div className='cursor-pointer' onClick={handleFiles}>
                Files
              </div>
              <div className='cursor-pointer' onClick={clearInput}>
                Clear
              </div>
              <div className='cursor-help' onClick={handleHelp}>
                Help
              </div>
            </div>
            <div className='flex-1 overflow-auto px-4 py-2' ref={terminalRef}>
              {history.map((command, index) => (
                <div key={index} className="text-white">{command}</div>
              ))}
              <TerminalInput
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                selectedOption={selectedOption}
              />
            </div>
          </div>
        </div>
      ) : (
        <Draggable bounds='parent' nodeRef={draggableRef}>
          <div ref={draggableRef} className={`h-full w-full ${maximized ? 'h-full w-full' : 'h-full w-full md:w-2/3 md:h-2/3 lg:w-2/3 lg:h-2/3'}`}>
            <div className='flex flex-col rounded-xl bg-gray-900 text-white font-mono h-full bg-opacity-40'>
              <div className='flex items-center justify-between bg-gray-800 px-4 py-2'>
                <div>
                  <BsFillTerminalFill />
                </div>
                <div className='text-sm'>user</div>
                <div className=' cursor-pointer flex gap-2'>
                  <div onClick={handleMinimize}>
                    <VscChromeMinimize />
                  </div>
                  <div onClick={handleMaximize}>
                    <VscChromeMaximize />
                  </div>
                  <div onClick={handleClose}>
                    <MdClose />
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-8 bg-gray-800 px-4 py-2'>
                <div className='cursor-pointer' onClick={handleFiles}>
                  Files
                </div>
                <div className='cursor-pointer' onClick={clearInput}>
                  Clear
                </div>
                <div className='cursor-help' onClick={handleHelp}>
                  Help
                </div>
              </div>
              <div className='flex-1 overflow-auto px-4 py-2' ref={terminalRef}>
                {history.map((command, index) => (
                  <div key={index} className="text-white">{command}</div>
                ))}
                <TerminalInput
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  selectedOption={selectedOption}
                />
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  )
}

export default Terminal