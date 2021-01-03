import React from 'react';
import s from './Sidebar.module.css';

const SidebarContainer = (props) => {
    let sideName = props.mas.map(friends => (
        <div className={s.sidebar} key={friends.id}>
            <img src="" alt="ava" className={s.ava} />
            <div className={s.name}>
                {friends.name}
            </div>
        </div>
    ));

    return (
        <div className={s.main}>
            <div className={s.header}>
                Друзья онлайн:
            </div>
            <div className={s.wrapper}>
                {sideName}
            </div>
        </div>
    );
}

export default SidebarContainer;