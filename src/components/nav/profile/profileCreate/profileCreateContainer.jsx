import React from "react";
import { connect } from "react-redux";
import { addPostCreator } from "../../../../redux/profile-reducer";
import { ProfileCreate } from "./profileCreate";

let mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        addPost : (newPostText) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}

const ProfileCreateContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileCreate)

export { ProfileCreateContainer };