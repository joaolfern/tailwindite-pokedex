import React, { useContext, useEffect, useRef, useState } from 'react'
import { IMainPageCard } from './ICard'
import pikachu from '../../../../assets/pikachu.png'
import Img from '../../../../components/Img/Img'
import { AppLoadingContext } from '../../../../contexts/AppLoadingContext'
import { formatPokemonName, getPokemonSprite } from '../../../../resources'
import PokemonCosumer from '../../../../consumers/pokemon'
import { IPokemon } from '../../../../types/pokemon'
import TypeBadge from '../../../../components/TypeBadge/TypeBadge'
import { _type } from '../../../../types/api'
import { useHistory } from 'react-router-dom'

function MainPageCard({ pokemon, loading, refCard }: IMainPageCard) {
  const [details, setDetails] = useState<IPokemon>()
  const [sprite, setSprite] = useState('')
  const { setIsAppLoading } = useContext(AppLoadingContext)
  const history = useHistory()

  async function getPokemonDetails() {
    try {
      const data = await PokemonCosumer.show({ id: pokemon.name })
      setDetails(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (!loading) getPokemonDetails()
  }, [loading])

  useEffect(() => {
    const sprite = getPokemonSprite({ name: pokemon.name })
    setSprite(sprite)
  }, [])

  function onCardClick() {
    if (!pokemon.name) return

    const state = {
      ...details,
      sprites: {
        ...details?.sprites,
        listSprite: sprite
      }
    }

    history.push({
      pathname: `pokedex/${pokemon.name}`,
      state
    })
  }

  return (
    <div
      className='bg-pallet-white-400 rounded flex flex-col items-center'
      ref={refCard}
      onClick={onCardClick}
    >
      <div>
        <Img
          className='w-16 h-14'
          src={!loading ? sprite : undefined}
          placeholder={pikachu}
        />
      </div>
      <a
        target='_blank'
      >
        {formatPokemonName(pokemon.name)}
      </a>
    </div>
  )
}

export default MainPageCard
