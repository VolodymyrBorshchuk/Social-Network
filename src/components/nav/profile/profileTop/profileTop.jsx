import React, { useState } from "react";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profileStatus";
import classes from "./profileTop.module.css";
import userPhoto from "../../../../assets/images/user.png";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileTop = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (

        <div className={classes.profile__top}>
            <div className={classes.profile__block1}>
                <img alt="profile" src={"https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"} user/>
            </div>
            <div className={classes.profile__block2}>
                <div>
                    <div>
                        <img src={profile.photos.large || userPhoto} />
                    </div>
                    <div>
                        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    </div>
                </div>
                <div>
                    <div className={classes.profile__fullName}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
        {profile.lookingForAJob &&
            <div>
                <p>My professional skills: {profile.lookingForAJobDescription}</p>
            </div>
        }
        <div>
            <b>About me</b>: {profile.fullName}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export { ProfileTop }