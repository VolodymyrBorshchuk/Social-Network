import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Input } from "../common/formsControl/formsControl";
import classes from "./login.module.css"
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>

            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {/* <div>
                <Field placeholder="E-Mail" name="email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"password"} placeholder="Password" name="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name="rememberMe" component={Input} /> remember me
            </div> */}

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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);