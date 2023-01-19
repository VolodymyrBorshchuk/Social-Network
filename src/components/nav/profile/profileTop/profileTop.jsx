import React from "react";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profileStatus";
import classes from "./profileTop.module.css"

const ProfileTop = ({profile, status, updateStatus, user}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        
        <div className={classes.profile__top}>
            <div className={classes.profile__block1}>
                <img alt="profile" src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" />
            </div>
            <div className={classes.profile__block2}>
                <div><img src={profile.photos.large} /></div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={classes.profile__fullName}>{user.fullName}</div>
            </div>

            <div></div>

        </div>
    )
}

export { ProfileTop }