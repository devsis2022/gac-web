import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

export const RequireAuth = ({ children }) => {
  const { authed } = useContext(AuthContext)

  return authed ? children : <Navigate to="/login" replace />
}
