import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { BsFillTerminalFill } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import TerminalInput from './terminalInput'

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const clearInput = () => {
    setInput('')
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') setInput('')
  };

  return (
    <div className='w-full h-full overflow-hidden relative flex justify-center items-center'>
      <Draggable bounds='parent'>
        <div className='h-full w-full md:w-2/3 md:h-2/3 lg:w-2/3 lg:h-2/3'>
          <div className='flex flex-col rounded-xl bg-gray-900 text-white font-mono h-full bg-opacity-40'>
            <div className='flex items-center justify-between bg-gray-800 px-4 py-2'>
              <div>
                <BsFillTerminalFill />
              </div>
              <div className='text-sm'>user</div>
              <div className=' cursor-pointer'>
                <div onClick={onClose}>
                  <MdClose />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-8 bg-gray-800 px-4 py-2'>
              <div className='cursor-pointer'>Files</div>
              <div className='cursor-pointer' onClick={clearInput}>
                Clear
              </div>
              <div className='cursor-help'>Help</div>
            </div>
            <div className='flex-1 overflow-auto px-4 py-2'>
              <TerminalInput
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Terminal