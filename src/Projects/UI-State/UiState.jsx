import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './UiState.css'

const UiState = () => {
  return (
    <div className='ui-state-container'>
        
        <div className="sidebar">
            <NavLink to="/UiState"><h2 >Projects</h2></NavLink>
           <ul className='ui-headings'>

            <li><Link to="/UiState/modal">Modal</Link></li>
            <li><Link to="/UiState/tabnavigation">Tab</Link></li>
            <li><Link to="dropdownMenu">DropDownMenu</Link></li>
            <li><Link to="/UiState/stepperform">Stepper Form</Link></li>
            <li><Link to="/UiState/pagination">Pagination</Link></li>
            <li><Link to="/UiState/notification">Notification</Link></li>
            <li><Link to="/UiState/profilesettings">Profile Settings</Link></li>
            <li><Link to="/UiState/sidebar">Sidebar Toggle</Link></li>
            <li><Link to="/UiState/multitheme">Multi Theme</Link></li>
            <li><Link to="/UiState/search">Search Suggestions</Link></li>

           </ul>
        </div>
        
        <div className='ui-content'>
            <h1 className='heading'>UI-State Management Projects with React and Redux</h1>
            <Outlet />
        </div>
    </div>
  )
}

export default UiState
