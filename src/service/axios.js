import axios from 'axios'


export const publicInstance = axios.create({
  baseURL: 'http://localhost:9000',
  headers: { 'Content-Type': 'application/json' },
})
