import React from 'react'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  return (
    <>
    <ThemeProvider>

      <Dashboard/>
    </ThemeProvider>
    </>
    
  )
}

export default App
