import React from "react"
import classes from "./dialogs.module.css";
import { DialogItem } from "./dialogItem/dialogItem";
import { Message } from "./messageItem/messageItem";
import { TextAreaMessage } from "../messages/textAreaMessage/textAreaMessage"
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/formsControl/formsControl";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogElements = state.usersData.map(user => <DialogItem key={user.id} name={user.name} id={user.id} icon={user.icon}></DialogItem>)
    let messagesElements = state.messagesData.map(mes => <Message key={mes.id} id={mes.id} message={mes.message} ></Message>)


    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>

            <div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} name="newMessageText" component={TextArea} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogSendMessageForm"})(AddMessageForm)

export default Dialogs