import React from 'react'
import classes from './post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img alt="avatar" src="https://static.thenounproject.com/png/3319451-200.png"></img>
            <div>{props.message}</div>
            <div>{props.likesCount}</div>
        </div>
    )
}

export { Post }