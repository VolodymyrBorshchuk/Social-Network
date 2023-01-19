import React from "react";
// import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/dialogs-reducer";

import classes from "./textAreaMessage.module.css"

const TextAreaMessage = (props) => {

    return (
        <div className={classes.textAreaMessage}>
            <textarea className={classes.textarea}
                // ref={newMessageElement}
                onChange={props.onNewMessageChange}
                value={props.value}
            ></textarea>
            <button onClick={props.onSendMessageClick}>Send</button>
        </div>
    )
}

export { TextAreaMessage }