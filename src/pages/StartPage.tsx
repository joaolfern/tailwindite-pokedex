import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <section
      className='flex-grow flex flex-col justify-between p-6'
      style={{ paddingTop: '20vh', paddingBottom: '20vh' }}
    >
      <Link
        to='pokedex'
        className='self-end triangle w-16 h-16 bg-pallet-yellow-400 rounded'
      >
        <span className='opacity-0'></span>
      </Link>
      <h1
        className='font-3d text-pallet-yellow-400 text-5xl'
      >
        Tailwindite Pokedex
      </h1>
    </section>
  )
}

export default StartPage
