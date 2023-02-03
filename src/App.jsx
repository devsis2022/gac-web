import { AuthProvider } from './context/authContext'
import { AppRoutes } from './routes'
import './style.css'

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
  