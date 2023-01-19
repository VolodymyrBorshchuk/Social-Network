import React from "react"
import { NavLink } from "react-router-dom"


import "./nav.css"

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav__item'>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/messages">Messages</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className='nav__item'>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export { Nav }