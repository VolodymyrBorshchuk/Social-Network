import React from "react";
import { MyPosts } from "../myPosts/myPosts";
import { Field, reduxForm } from "redux-form";
import classes from "./profileCreate.module.css";
import { required, maxLengthCreator } from "../../../../utils/validators/validators";
import { TextArea } from "../../../common/formsControl/formsControl";

const ProfileCreate = React.memo(props => {

    console.log("flkajdgsd")

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.profileCreate}>

            <div className={classes.newPostBlock}>
                <AddPostFormRedux onSubmit={addNewPost} />

                <div className={classes.mediaButtons}>
                    add media buttons
                </div>
            </div>

            <MyPosts postsPage={props.postsPage}></MyPosts>
        </div>
    )
})

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={TextArea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button className={classes.newPostButton}>Add New Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm);

export { ProfileCreate }