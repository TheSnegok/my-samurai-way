import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Input } from '../common/FormsControl/FormsControls'
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
            // errors.errorText = required(values);
            // if(!errors.errorText) {
            // 	errors.errorText = maxLengthCreator10(values);
            // }
            return errors;
        }}
        onSubmit={(actions) => {
            props.onLogin(actions)
        }}>
        { ({
            handleBlur,
            handleChange,
            values,
            errors,
            touched
        }) => (
            <Form>
                <Field onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={'Email'}
                        name='email' component={Input}
                        value={values.email} 
                        errors={errors.email}
                        touched={touched.email} />
                <Field onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={'Password'} 
                        name='password' component={Input}
                        type='password' autoComplete="off"  
                        value={values.password} 
                        errors={errors.password}
                        touched={touched.password} />
                <Field onChange={handleChange}
                        name='rememberMe'  
                        type='checkbox' /> remember me
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
