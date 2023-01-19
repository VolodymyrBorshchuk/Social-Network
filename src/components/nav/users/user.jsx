import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={classes.userCard}>
            <div className={classes.userPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt="#" src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={classes.userPhoto} />
                </NavLink>
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.city"}, {"user.location.country"}</div>

            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}>
                        Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}>
                        Follow</button>
                }
            </div>
        </div>
    )
}

export default User