import React from 'react'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} /> rememver me
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
