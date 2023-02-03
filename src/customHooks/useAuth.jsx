import * as React from 'react'
import axios from 'axios'

export const useAuth = () => {
  const [authed, setAuthed] = React.useState(false)
  const [mainRole, setMainRole] = React.useState('')

  const getMainRole = (roles) => {
    return roles[0]
  }

  const login = async (user, password) => {
    // fazer a request para receber o token do usuário
    const response = await axios.post('http://localhost:9000/auth/login', { user, password })
    console.log(response)
    // persistir o token da session storage
    // setar role principal
    setAuthed(true)
    setMainRole(getMainRole(['admin']))
    // devolver o token
    return 'token'
  }

  const logout = () => {
    // remover token da session storage
    setAuthed(false)
  }

  return {
    authed,
    mainRole,
    login,
    logout,
  }
}
