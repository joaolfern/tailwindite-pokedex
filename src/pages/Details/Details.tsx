import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Img from '../../components/Img/Img'
import { IPokemon } from '../../types/pokemon'
import pikachu from '../../assets/pikachu.png'
import { getPokemonSprite } from '../../resources'
import HeaderLight from '../../components/HeaderLight/HeaderLight'

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
        <HeaderLight
          className='w-32 h-32 border-none relative cursor-pointer hover:shadow'
          style={{background: 'linear-gradient(134deg, #ECECEC 32%, #CDCDCD 177.12%)'}}
        >
          <Img
            className='w-full h-full object-contain'
            src={details?.sprites?.listSprite}
            placeholder={pikachu}
          />
          <span className="animate-ping absolute inset-0 z--1 inline-flex h-full w-full rounded-full bg-pallet-white-400 opacity-40"></span>
        </HeaderLight>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-3'>
            <HeaderLight className='bg-red-600'></HeaderLight>
            <HeaderLight className='bg-yellow-400'></HeaderLight>
            <HeaderLight className='bg-green-400'></HeaderLight>
          </div>
          <h1 className=''>
            {details?.name}
          </h1>
        </div>
      </div>
      {/* {params.name} */}
    </section>
  )
}

export default Details
