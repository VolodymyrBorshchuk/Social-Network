import React from "react";
// import { MyPosts } from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo";
import { ProfileTop } from "./profileTop/profileTop";
import { ProfileCreateContainer } from "./profileCreate/profileCreateContainer";
import classes from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileTop profile={props.profile} user={props.user} status={props.status} 
            updateStatus={props.updateStatus} isOwner={props.isOwner}
            savePhoto={props.savePhoto}/>

            <ProfileInfo />

            <ProfileCreateContainer store={props.store} />

            {/* <MyPosts
                store={props.store.getState().postsPage.postsData}
            ></MyPosts> */}

        </div>
    )
}

export default Profile