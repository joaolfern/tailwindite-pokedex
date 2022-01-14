
interface IGetPokemonSprite {
  shiny?: boolean
  name: string
}

const spriteResource = 'https://raw.githubusercontent.com/msikma/pokesprite/master'

const validHyphenNames = ['nidoran-m', 'nidoran-f', 'ho-oh', 'mr-mime', 'mr-rime', 'mime-jr', 'porygon-z']

function formatPokemonName (name: string) {
  if (name.includes('-') && !validHyphenNames.includes(name)) return name.split('-')[0]
  return name
}

const getPokemonSprite = ({ shiny, name }: IGetPokemonSprite) => {
  const formattedName = formatPokemonName(name)

  return `${spriteResource}/pokemon-gen8/${shiny ? 'shiny' : 'regular'}/${formattedName}.png`
}

export {
  spriteResource,
  getPokemonSprite,
  formatPokemonName
}
