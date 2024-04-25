import React, { useState } from 'react'

function TerminalInput() {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.input)
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter')
        setInput('')
    }
  return (
    <div className='flex gap-3'>
        <div className=' text-blue-500'>user@kali:~$</div>
        <input type='text'
            className='bg-transparent border-none outline-none w-full'
            placeholder='Enter command'
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
             />
        
    </div>
  )
}

export default TerminalInput