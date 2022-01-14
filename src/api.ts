import axios  from 'axios'

const API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 30000
})

export default API