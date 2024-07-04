import React from 'react'
import {FaBars, FaTimes} from 'react-icons'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200'>
      <div className='cursor-pointer'>
        <p style={{width: '50px'}}>KaranS.</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
        </ul>
      </div>
      <div className='hidden'>
        <FaBars />
      </div>
      <div className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
      </div>
    </div>
  )
}

export default Navbar
