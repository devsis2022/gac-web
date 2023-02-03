import * as React from 'react'
import { useAuth } from '../customHooks/useAuth'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export { AuthContext }


