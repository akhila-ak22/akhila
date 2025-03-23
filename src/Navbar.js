import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2> Product App</h2>
            <div>
                <Link to="/">Products</Link>
                <Link to="/add-product">Add Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
         
              </div>
          </nav>
    
  )
}

export default Navbar
