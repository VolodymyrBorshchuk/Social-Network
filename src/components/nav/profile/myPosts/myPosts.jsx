import React from "react";
import { Post } from "./post/post";

import classes from "./myPosts.module.css"


const MyPosts = (props) => {

    let postElements = props.postsPage.postsData
        .reverse()
        .map(post => <Post id={post.id} likesCount={post.likesCount} message={post.message} ></Post>)

    return (
        <div className={classes.myPosts}>
            <h3>My Posts</h3>
            {postElements}
        </div>
    )
}

export { MyPosts }