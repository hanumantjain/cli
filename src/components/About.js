import React from 'react'

const About = () => {
  return (
    <div>
        <div className='flex gap-3'>
            <p className="text-blue-500">Name:~$</p>
            <p>Hanumant Jain</p>
        </div>
        <div className='flex gap-3'>
            <p className="text-blue-500">Education:~$</p>
            <p>MS in Computer Science at George Washington University</p>
        </div>
        <div className='flex gap-3'>
            <p className="text-blue-500">Email:~$</p>
            <p>hanumantjain939@gmail.com</p>
        </div>
        <div className='flex gap-3'>
            <p className="text-blue-500">Website:~$</p>
            <a href="https://hanumantjain.tech" target='_blank' rel="noreferrer">hanumantjain.tech</a>
        </div>
        <div className='flex gap-3'>
            <p className="text-blue-500">LinkedIn:~$</p>
            <a href="https://www.linkedin.com/in/hanumant-jain-621745173/" target='_blank' rel="noreferrer">hanumant-jain-621745173</a>
        </div>
    </div>
  )
}

export default About