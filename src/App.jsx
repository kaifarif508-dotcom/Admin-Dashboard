import React from 'react'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'


const App = () => {
  return (
    <>
  <UserProvider>

    <ThemeProvider>

      <Dashboard/>
    </ThemeProvider>
  </UserProvider>
    </>
    
  )
}

export default App
