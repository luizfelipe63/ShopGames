import axios from 'axios'

export const RawgAPI = axios.create({
  baseURL: 'https://api.rawg.io/api/',
})
