import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/authContext'
import { GlobalProvider } from './context/globalContext'
import { LoadingProvider } from './context/loadingContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthProvider>
      <LoadingProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </LoadingProvider>
    </AuthProvider>
)
