import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // this.props.history.push("/login"); замість цього використовуємо :
                this.props.navigate('/login'); 
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                user={this.props.user}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(Profile);

let mapStateToProps = (state) => ({
    profile: state.postsPage.profile,
    user: state.postsPage.user,
    status: state.postsPage.status,

    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

})

function withRouter(Profile) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Profile
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export const withNavigate = (Component) => {
    let RedirectTo = (props) => {
        return < Component {...props} navigate={useNavigate()} />
    }
    return RedirectTo;
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withNavigate
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
