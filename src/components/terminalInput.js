import React from 'react'

const TerminalInput = ({ value, onChange, onKeyDown, isContact }) => {
    return (
        <div className='flex gap-3'>
            <div className='text-blue-500'>user@kali:~$</div>
            {isContact ? (
                <input
                    type='text'
                    className='bg-transparent border-none outline-none w-full'
                    placeholder='Enter E-mail'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            ) : (
                <input
                    type='text'
                    className='bg-transparent border-none outline-none w-full'
                    placeholder='Enter Command'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            )}
        </div>
    )
}

export default TerminalInput

