import React from "react"
import { NavLink } from "react-router-dom"

import classes from "./header.module.css"

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt="header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/800px-ZDF_logo%21_Logo_2021.svg.png" />

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}

export { Header }