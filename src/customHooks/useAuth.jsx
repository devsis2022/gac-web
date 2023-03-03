import * as React from 'react'
import { publicInstance } from '../service/axios'

const checkAuthState = () => !!sessionStorage.getItem('token')

export const useAuth = () => {
  const [authed, setAuthed] = React.useState(checkAuthState())

  const login = async (user, password) => {
    try {
      const response = await publicInstance.post('/auth/login', { user, password })

      sessionStorage.setItem('token', response.data.token)

      setAuthed(true)

      return response.data.token
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const logout = () => {
    sessionStorage.removeItem('token')
    setAuthed(false)

  }

  return {
    authed,
    login,
    logout,
  }
}
