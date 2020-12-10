import React from 'react'
import { Formik, Form } from 'formik'
import { CreateField } from '../common/FormsControl/FormsControls'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import s from './Login.module.css'
import { FormsErrors } from '../common/FormsErrors/FormsErrors'

const LoginForm = (props) => {
    return (
        <Formik initialValues={{
            email: '',
            password: '',
            rememberMe: false
        }}
            validate={(values) => {
                let errors = {};
                FormsErrors(values, errors, 'email', 15);
                FormsErrors(values, errors, 'password', 15);
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

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1 className={s.nameComponent}>Login</h1>
            <hr />
            <LoginForm onLogin={onLogin} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
