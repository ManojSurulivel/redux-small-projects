import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><h1>React Redux Projects</h1></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/Beginner">Beginner</Link></li>
        <li><Link to="/DataFetch">DataFetching</Link></li>
        <li><Link to="/UiState">UI-State</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
