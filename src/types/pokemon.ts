import { IIndexData,  } from "./api"

export interface IPokemon {
  abilities?: IAbility[]
  baseExperience?: number
  forms?: IIndexData[]
  gameIndices?: GameIndex[]
  height?: number
  heldItems?: HeldItem[]
  id?: number
  isDefault?: boolean
  locationAreaEncounters?: string
  moves?: Move[]
  name?: string
  order?: number
  pastTypes?: any[]
  species?: IIndexData
  sprites?: Sprites
  stats?: Stat[]
  types?: Type[]
  weight?: number
}

export interface IAbility {
  ability?: IIndexData
  isHidden?: boolean
  slot?: number
}



export interface GameIndex {
  gameIndex?: number
  version?: IIndexData
}

export interface HeldItem {
  item?: IIndexData
  versionDetails?: VersionDetail[]
}

export interface VersionDetail {
  rarity?: number
  version?: IIndexData
}

export interface Move {
  move?: IIndexData
  versionGroupDetails?: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  levelLearnedAt?: number
  moveLearnMethod?: IIndexData
  versionGroup?: IIndexData
}

export interface GenerationV {
  blackWhite?: Sprites
}

export interface GenerationIv {
  diamondPearl?: Sprites
  heartgoldSoulsilver?: Sprites
  platinum?: Sprites
}

export interface Versions {
  generationI?: GenerationI
  generationIi?: GenerationIi
  generationIii?: GenerationIii
  generationIv?: GenerationIv
  generationV?: GenerationV
  generationVi?: { [key: string]: GenerationVi }
  generationVii?: GenerationVii
  generationViii?: GenerationViii
}

export interface Sprites {
  listSprite?: string
  backDefault?: string
  backFemale?: string
  backShiny?: string
  backShinyFemale?: string
  frontDefault?: string
  frontFemale?: string
  frontShiny?: string
  frontShinyFemale?: string
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export interface GenerationI {
  redBlue?: RedBlue
  yellow?: RedBlue
}

export interface RedBlue {
  backDefault?: string
  backGray?: string
  frontDefault?: string
  frontGray?: string
}

export interface GenerationIi {
  crystal?: Crystal
  gold?: Crystal
  silver?: Crystal
}

export interface Crystal {
  backDefault?: string
  backShiny?: string
  frontDefault?: string
  frontShiny?: string
}

export interface GenerationIii {
  emerald?: Emerald
  fireredLeafgreen?: Crystal
  rubySapphire?: Crystal
}

export interface Emerald {
  frontDefault?: string
  frontShiny?:   string
}

export interface GenerationVi {
  frontDefault?: string
  frontFemale?: null
  frontShiny?: string
  frontShinyFemale?: null
}

export interface GenerationVii {
  icons?: DreamWorld
  ultraSunUltraMoon?: GenerationVi
}

export interface DreamWorld {
  frontDefault?: string
  frontFemale?: null
}

export interface GenerationViii {
  icons?: DreamWorld
}

export interface Other {
  dreamWorld?: DreamWorld
  officialArtwork?: OfficialArtwork
}

export interface OfficialArtwork {
  frontDefault?: string
}

export interface Stat {
  baseStat?: number
  effort?: number
  stat?: IIndexData
}

export interface Type {
  slot?: number
  type: IIndexData
}
