import React from "react";
import { CreateField, Input, Textarea } from "../../../common/formsControl/formsControl";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return  <form onSubmit={handleSubmit}>

        <div><button>save</button></div>

        {error && <div >
            {error}
        </div>
        }

        <div>
            <b>Full name</b>: {CreateField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>

        <div>
            <b>My professional skills</b>:
            {CreateField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>


        <div>
            <b>About me</b>:
            {CreateField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <b>{key}: {CreateField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form> 
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;