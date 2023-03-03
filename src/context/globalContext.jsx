import * as React from 'react'
import { useGlobal } from '../customHooks/useGlobal'

const GlobalContext = React.createContext()

export function GlobalProvider({ children }) {
  const global = useGlobal()

  return <GlobalContext.Provider value={global}>{children}</GlobalContext.Provider>
}

export const GlobalConsumer = () => React.useContext(GlobalContext)
