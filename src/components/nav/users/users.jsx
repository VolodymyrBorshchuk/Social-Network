import React from "react";
import classes from "./users.module.css";
import Paginator from "../../common/paginator/paginator";
import User from "./user";

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div className={classes.users__container}>
            <div className={classes.title}>
                <div >Your Friends</div>

                <Paginator
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize} />
            </div>

            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    )
}

export default Users