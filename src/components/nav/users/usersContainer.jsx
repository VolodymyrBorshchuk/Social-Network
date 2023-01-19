import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers } from "../../../redux/users-reducer";
import Users from "./users";
import Preloader from "../../common/preloader/preloader";
import { compose } from "redux";
import { getCurrentPage, getfollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize)
        /*  this.props.toggleIsFetching(true);
 
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
 
             this.props.toggleIsFetching(false);
             this.props.setUsers(data.items);
             this.props.setTotalUsersCount(data.totalCount);
         }) */
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize)

        /* this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            }) */
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getfollowingInProgress(state)
    }
}

export default compose(
    /* withAuthRedirect, */
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers })
)(UsersContainer)

// withAuthRedirect(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer));

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */