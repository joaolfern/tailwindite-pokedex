export interface APIResponse<type> {
  count?: number
  next?: string | null
  previous?: string | null
  results?: type
}

export interface IIndexData {
  name: string;
  url:  string;
}

export type _type = 'fire' | 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'normal' | 'rock' | 'steel' | 'water'
