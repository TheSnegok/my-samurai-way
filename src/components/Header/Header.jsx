import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    let logoutCLick = () => {
        props.logout();
    }

    return (
        <header className={s.header}> 
            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='alt' />
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div className={s.login}><button className={s.buttonLogout} onClick={logoutCLick}>{props.login}</button></div> 
                : <NavLink className={s.logout} to='/login'><button className={s.buttonLogin}>Login</button></NavLink>
                }
            </div>
        </header>
    );
}

export default Header;