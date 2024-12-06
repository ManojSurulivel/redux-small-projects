import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1> Redux React Projects</h1>
      
      <ul>
      <li><Link to="/Beginner"><h3>React Redux Projects for Beginner</h3></Link> </li>
       <li><Link to="/DataFetch"><h3>React-Redux Projects DataFetching</h3></Link></li>
       <li><Link to="/UiState"><h3>UI State Management</h3></Link></li>
       <li><h3>CRUD & Advanced State</h3></li>
       <li><h3>Real-World Scenarios</h3></li>
      </ul>

      <p>"Click on the navbar to explore React-Redux Projects"</p>
    </div>
  )
}

export default Home
