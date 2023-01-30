import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { CreateField, Input } from "../common/formsControl/formsControl";
import classes from "./login.module.css"
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>

            {CreateField("Email", "email", [required], Input)}
            {CreateField("Password", "password", [required], Input, { type: "password" })}
            {CreateField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {captchaUrl && <img src={captchaUrl}></img>}
            {captchaUrl && CreateField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={classes.formSummaryError}>{error}</div>}

            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);