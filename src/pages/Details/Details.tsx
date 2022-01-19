import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Img from '../../components/Img/Img'
import { IPokemon } from '../../types/pokemon'
import pikachu from '../../assets/pikachu.png'
import { getPokemonSprite } from '../../resources'

function Details() {
  const history = useHistory()

  const [details, setDetails] = useState<IPokemon>()
  const [expandedMenu, setExpandedMenu] = useState(false)
  const params = useParams() as { name?: string }

  useEffect(() => {
    const { state } = history.location as { state?: IPokemon }

    if (state) setDetails(state)

    if (!state?.sprites?.listSprite && params?.name) {
      const sprite = getPokemonSprite({ name: params.name })


      setDetails({
        ...details,
        sprites: {
          ...details?.sprites,
          listSprite: sprite
        }
      })
    }
  }, [])

  return (
    <section
      className='details z-10 absolute inset-0 blury-background animate-fadeIn'
    >
      <div className='flex w-full space-x-4 p-6'>
        <span className='header-light header-light-card w-32 h-32 border-none relative cursor-pointer hover:shadow'>
          <Img
            className='w-full h-full object-contain'
            src={details?.sprites?.listSprite}
            placeholder={pikachu}
          />
          <span className="animate-ping absolute inset-0 z--1 inline-flex h-full w-full rounded-full bg-pallet-white-400 opacity-40"></span>
        </span>
        <span className='header-light bg-red-600'></span>
        <span className='header-light bg-yellow-400'></span>
        <span className='header-light bg-green-400'></span>
      </div>
      {/* {params.name} */}
    </section>
  )
}

export default Details
