import React, { useState } from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChenged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            <div className={style.paginator}>
                {portionNumber > 1 && 
                <button className={style.prevButton} onClick={() => {setPortionNumber(portionNumber - 1)}}>&#60;</button>}
                {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                .map(p => {
                    return (
                    <div key={p} 
                        className={currentPage === p ? style.selectedPage : style.otherPage} 
                        onClick={(e) => { onPageChenged(p) }}>{p}
                    </div>
                    )
                })}
                {portionCount > portionNumber && 
                <button className={style.nextButton} onClick={() => {setPortionNumber(portionNumber + 1)}}>&#62;</button>}
            </div>
        </div>
    )
}

export default Paginator;