import React from 'react';
import ava from '../../assets/images/04bb2164bbfa3684118a442c17d086bf.jpg';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={s.userBlock}>
            <div className={s.blockAva}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : ava} alt='ava' className={s.ava} />
                </NavLink>
            </div>
            <div className={s.infoBlock}>
                <div>
                    Name: {user.name}
                </div>
                {user.status 
                ? <div className={s.userStatus}>
                    { user.status.length > 15 
                    ? <span className={s.longStatus}>Status: Very long status!</span> 
                    : <span>Status: {user.status}</span>}
                </div> 
                : null}
            </div>
            <div className={s.button} >
                {user.followed
                ? <button className={s.unfollowButton} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);
                }}>Unfollow</button>
                : <button className={s.followButton} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }}>Follow</button>}
            </div>
        </div>
    )
}

export default User;