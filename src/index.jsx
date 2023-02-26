import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/authContext'
import { LoadingProvider } from './context/loadingContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </AuthProvider>
)
