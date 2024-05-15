import React from 'react'

const TerminalInput = ({ value, onChange, onKeyDown, selectedOption }) => {
    return (
        <div className='flex gap-3'>
            <div className='text-blue-500'>user@kali:~$</div>
            {selectedOption === 'contact' ? (
                <input
                    type='text'
                    className='bg-transparent border-none outline-none w-full'
                    placeholder='Enter E-mail'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            ) : selectedOption === 'about' ? (
                <input
                    type='text'
                    className='bg-transparent border-none outline-none w-full h-full'
                    placeholder='About'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
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
}

export default TerminalInput

