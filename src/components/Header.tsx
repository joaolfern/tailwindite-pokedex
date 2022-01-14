import React from 'react'
import divider from '../assets/divider.svg'

function Header() {
  return (
    <header className='w-full bg-red-500 relative mb-14'>
      <div className='flex w-full space-x-4 p-6'>
        <span className='header-light bg-blue-400 w-32 h-32 border-gray-200 border-8'></span>
        <span className='header-light bg-red-600'></span>
        <span className='header-light bg-yellow-400'></span>
        <span className='header-light bg-green-400'></span>
      </div>
      <img className='absolute -bottom-6' src={divider} alt='' />
    </header>
  )
}

export default Header
