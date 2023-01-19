import React from "react";
import classes from "./profileStatus.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        // this.setState({ editMode: !this.state.editMode })
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.statusDiv}>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}> {this.props.status || "------------"}</span>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} onFocus={true}  onBlur={this.deactivateEditMode} value={this.state.status}></input>
                }
            </div>
        )
    }
}

export default ProfileStatus