import React from 'react';
import style from './Paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                    <span key={p} 
                        className={props.currentPage === p ? style.selectedPage : ''} 
                        onClick={(e) => { props.onPageChenged(p) }}>{p}
                    </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Paginator;