import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./dialogItem.module.css";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={props.id}>
                    <img src={props.icon} alt={props.id} />
            </NavLink>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}

export { DialogItem }