import React from 'react'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { Route, Routes } from 'react-router-dom'
import Order from './components/Order'


const App = () => {
  
  return (
    <>
  <UserProvider>

    <ThemeProvider>
<Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/Order' element={<Order/>}/>
      {/* <Dashboard/> */}
</Routes>

    </ThemeProvider>
  </UserProvider>
    </>
    
  )
}

export default App
