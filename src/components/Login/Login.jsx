import React from 'react'
import { Formik, Form } from 'formik'
import { CreateField } from '../common/FormsControl/FormsControls'
import { connect } from 'react-redux'
import {login} from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
    return (
        <Formik initialValues={{
            email: '',
            password: '',
            rememberMe: false
        }}
        validate={(values) => {
            let errors = {};
            if(!values.email) {
                errors.email = 'Values is null';
            } 
            if (values.email.length > 40) {
                errors.email = `Max length is 40`;
            }
            if(!values.password) {
                errors.password = 'Values is null';
            } 
            if (values.password.length > 40) {
                errors.password = `Max length is 40`;
            }
            return errors;
        }}
        onSubmit={(actions) => {
            props.onLogin(actions);
        }}>
        { ({
            handleBlur,
            handleChange,
            values,
            errors,
            touched
        }) => (
            <Form>
                {CreateField(handleChange, handleBlur, 'Email', 'email', values.email, errors.email, touched.email)}
                {CreateField(handleChange, handleBlur, 'Password', 'password', values.password, errors.password, touched.password, 'password')}
                {CreateField(handleChange, handleBlur, '', 'rememberMe', '', '', '', 'checkbox', 'off')}
            <div>
                <button type='submit'>Sign In</button>
            </div>
        </Form>
            )}
        </Formik>
    )
}

const Login = (props) => {
    let onLogin = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={onLogin} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);
