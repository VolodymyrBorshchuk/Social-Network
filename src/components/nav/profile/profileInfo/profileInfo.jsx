import React from "react";
import Preloader from "../../../common/preloader/preloader";

import classes from "./profileInfo.module.css";

const ProfileInfo = (props) => {
     if (!props.profile) {
         return <Preloader />
     }

    return (
        <div className={classes.profileInfo}>
            <div>
               
            </div>
        </div>
    )
}

export { ProfileInfo }