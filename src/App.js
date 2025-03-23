import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
    return (
      <Router>
            <Navbar />
            <Routes>
                <Route  path="/"  element={<productList />} />
                <Route  path="/ Login"  element={<Login />} />
                <Route  path="/ Register"  element={<Register />} />
                
       </Routes>
</Router>


  )
}

export default App

