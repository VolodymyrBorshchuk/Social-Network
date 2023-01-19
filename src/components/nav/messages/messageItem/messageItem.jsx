import React from "react";

import classes from "./messageItem.module.css"

const Message = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export { Message }