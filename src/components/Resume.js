import React from 'react'
import resume from '../assets/Hanumant_Resume.pdf'

const Resume = () => {
  return (
    <div>
        <p className="text-blue-500">Resume :~$ <span className='text-white'>Click below to view download the resume: </span></p>
        <div className='flex justify-evenly pt-10'>
            <a href={resume} target='_blank' rel="noreferrer" className=' border-white border-b-2'>View Resume</a>
            <a href={resume} download="Hanumant_Resume.pdf" className=' border-white border-b-2'>Download Resume</a>
        </div>
    </div>
  )
}

export default Resume