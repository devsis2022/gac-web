import { Navigate } from 'react-router-dom'
import { AuthConsumer } from '../../context/authContext'

export const RequireAuth = ({ children }) => {
  const { authed } = AuthConsumer()
  // TODO: Verificar se o token está na sessionStorage e setar o setAuthed pra true
  return authed ? children : <Navigate to="/login" />
}
