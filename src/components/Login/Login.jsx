import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import LoginForm  from './LoginForm/LoginForm';
import MainHeader from '../common/MainHeader/MainHeader';

const Login = (props) => {
    let onLogin = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <MainHeader text='Login' />
            <LoginForm onLogin={onLogin} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
