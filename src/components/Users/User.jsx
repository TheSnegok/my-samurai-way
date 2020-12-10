import React from 'react';
import ava from '../../assets/images/04bb2164bbfa3684118a442c17d086bf.jpg';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <nav>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : ava} alt='ava' className={s.ava} />
                </NavLink>
            </nav>
            <div>
                <span>
                    {user.name}
                </span>
                <div className={s.userStatus}>
                    {user.status}
                </div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>}

            </div>
        </div>
    )
}

export default User;