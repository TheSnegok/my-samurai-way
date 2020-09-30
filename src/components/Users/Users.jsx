import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, onPageChenged, currentPage, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} onPageChenged={onPageChenged} currentPage = {currentPage} pageSize = {pageSize}/>
            {users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)}
        </div>
    )
}

export default Users;