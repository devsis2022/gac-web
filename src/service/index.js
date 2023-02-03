import axios from 'axios'

const config = {
  baseUrl: 'http://localhost:9000',
}

export const client = axios.create(config)

export const authenticatedClient = axios.create({
  ...config,
  headers: {
    common: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  },
})
