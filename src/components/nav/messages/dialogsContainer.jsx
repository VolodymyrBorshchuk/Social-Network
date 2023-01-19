import React from "react"
import Dialogs from "./dialogs"
import { sendMessageCreator } from "../../../redux/dialogs-reducer"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)