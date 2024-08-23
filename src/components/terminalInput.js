import React from 'react'
import Contact from './Contact'
import About from './About'


const TerminalInput = React.forwardRef(({ value, onChange, onKeyDown, selectedOption }) => {
  return (
    <div>
      {selectedOption === 'contact' ? (
          <Contact />
      ) : selectedOption === 'about' ? (
        <About />
        
       ) : 
      //  selectedOption === 'projects' ? (

      // ) : 
      (
        <div className='flex gap-3'>
        <span className="text-blue-500">user@kali:~$</span>
        <input
          type='text'
          className='bg-transparent border-none outline-none w-full h-full'
          placeholder='Enter Command'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          
        />
        </div>
      )}
    </div>
  )
})

export default TerminalInput
