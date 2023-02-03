import { Navigate } from 'react-router-dom'
import { AuthConsumer } from '../../context/authContext'

export const RequireAuth = ({ children }) => {
  const { authed } = AuthConsumer()
  return authed ? children : <Navigate to="/login" replace />
}
