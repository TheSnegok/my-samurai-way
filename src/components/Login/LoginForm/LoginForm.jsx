import { Form, Formik } from 'formik';
import React from 'react';
import { CreateField } from '../../common/FormsControl/FormsControls';
import { FormsErrors } from '../../common/FormsErrors/FormsErrors';


const LoginForm = (props) => {
    return (
        <Formik initialValues={{
            email: '',
            password: '',
            // rememberMe: false
            captcha: ''
        }}
            validate={(values) => {
                let errors = {};
                FormsErrors(values, errors, 'email', 25);
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
                        {/* {CreateField(handleChange, handleBlur, '', 'rememberMe', '', '', '', 'checkbox', 'off')} */}
                        {props.captchaUrl && <img alt='captcha' src={props.captchaUrl} />}
                        {props.captchaUrl && CreateField(handleChange, handleBlur, 'Captcha', 'captcha', values.captcha, errors.captcha, touched.captcha)}
                        <div>
                            <button type='submit'>Sign In</button>
                        </div>
                    </Form>
                )}
        </Formik>
    )
}

export default LoginForm;