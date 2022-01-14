import React from 'react'
import { _type } from '../../types/api'
import { ITypeBadge } from './ITypeBadge'

const typeColors: { [key in _type]: string } = {
  fire: '#C62100',
  bug: '#87950D',
  dark: '#3C2D23',
  dragon: '#735CDB',
  electric: '#FCBA16',
  fairy: '#E08FE0',
  fighting: '#82341D',
  flying: '#5D73D4',
  ghost: '#5C5CAD',
  grass: '#68BB2C',
  ground: '#CBAA50',
  ice: '#6DD3F4',
  normal: '#ADA594',
  poison: '#904392',
  psychic: '#EC4781',
  rock: '#9E863D',
  steel: '#9898A9',
  water: '#3294F6'
}

function TypeBadge({ type }: ITypeBadge) {
  return (
    <div
      className='type-badge rounded text-white pl-1 pr-1 text-center uppercase font-ZenKaku text-xs'
      style={{ background: typeColors[type], flexBasis: 100 }}
    >
      {type}
    </div>
  )
}

export default TypeBadge
