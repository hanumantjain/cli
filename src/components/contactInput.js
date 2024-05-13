import React from 'react'

const contactInput = ({ value, onChange, onKeyDown }) => {
  return (
    <div className='flex gap-3'>
      <div className='text-blue-500'>user@kali:~$</div>
      <input
        type='text'
        className='bg-transparent border-none outline-none w-full'
        placeholder='Enter E-mail'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default contactInput