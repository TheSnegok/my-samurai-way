import React from 'react'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <input placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <input placeholder={'password'} name={'password'} component={'input'} />
            </div>
            <div>
                <input type={'checkbox'} component={'input'} name={'rememberMe'} /> rememver me
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
