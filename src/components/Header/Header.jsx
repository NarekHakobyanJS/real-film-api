
import React from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../Auth/Auth'
import SearchBlock from '../SearchBlock/SearchBlock'
import "./header.css"
const Header = () => {
    
    return (
        <header className='header'>
            <NavLink to="/">
                <img className="logo" src="https://images-platform.99static.com//5fVeexjJRN_kWQ709H5m_3-LniY=/0x0:1024x1024/fit-in/590x590/projects-files/30/3049/304958/43fd7dbe-c8f4-4337-b066-934b7827039b.jpg" />
            </NavLink>
            <div className='header-block'>
              <SearchBlock />
              <Auth />
            </div>
        </header>
    )
}

export default Header