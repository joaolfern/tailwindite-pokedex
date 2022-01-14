import { AxiosResponse } from "axios"
import API from "../api"
import { APIResponse, IIndexData } from "../types/api"
import { IPokemon } from "../types/pokemon"

interface IShowProps {
  id: string
}

const pokemon = {
  show: async ({ id }: IShowProps): Promise<IPokemon> => {
    try {
      const response: AxiosResponse<IPokemon> = await API.get(`pokemon/${id}`)
      return response?.data
    } catch (err) {
      console.log(err)
      throw err
    }
  },
  list: async (params?: any): Promise<APIResponse<IIndexData[]>> => {
    try {
      const response: AxiosResponse<APIResponse<IIndexData[]>> = await API.get('pokemon', { params })
      return response.data
    } catch (err) {
      console.log(err)
      throw err
    }
  },
  listAll: async (): Promise<APIResponse<IIndexData[]>> => {
  try {
    const response: AxiosResponse<APIResponse<IIndexData[]>> = await API.get('pokemon/', { params: { limit: 898 } })
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
},
}

export default pokemon