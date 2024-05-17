import React from 'react'

const TerminalInput = React.forwardRef(({ value, onChange, onKeyDown, selectedOption }) => {
  return (
    <div className='flex gap-3'>
      <div className='text-blue-500'>user@kali:~$</div>
      {selectedOption === 'contact' ? (
        <input
          type='email'
          className='bg-transparent border-none outline-none w-full'
          placeholder='Enter your E-mail'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          
        />
      ) : selectedOption === 'about' ? (
        <div>Hi</div>
      ) : selectedOption === 'projects' ? (
        <input
          type='text'
          className='bg-transparent border-none outline-none w-full h-full'
          placeholder='Choose Projects'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
         
        />
      ) : (
        <input
          type='text'
          className='bg-transparent border-none outline-none w-full h-full'
          placeholder='Enter Command'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          
        />
      )}
    </div>
  )
})

export default TerminalInput
