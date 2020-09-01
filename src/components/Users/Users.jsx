import React from 'react';
import ava from '../../assets/images/04bb2164bbfa3684118a442c17d086bf.jpg';
import style from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? style.selectedPage : ''} onClick={(e) => { props.onPageChenged(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(u => (
                <div key={u.id}>
                    <div>{u.name}</div>
                    <div>
                        <nav>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : ava} alt='ava' className={style.ava} />
                            </NavLink>
                        </nav>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                        <div>{u.status}</div>
                    </div>
                </div>)
            )}
        </div>
    )
}

export default Users;