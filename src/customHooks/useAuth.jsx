import * as React from 'react'
import { publicInstance } from '../service/axios'

export const useAuth = () => {
  const [authed, setAuthed] = React.useState(false)

  const login = async (user, password) => {
    try {
      const response = await publicInstance.post('/auth/login', { user, password })
      console.log(response.data)
      sessionStorage.setItem('token', response.data.token)
      // persistir o token da session storage
      setAuthed(true)
      // devolver o token
      return response.data.token
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const logout = () => {
    // remover token da session storage
    setAuthed(false)
  }

  return {
    authed,
    login,
    logout,
  }
}
