import React from 'react';
import s from './MainHeader.module.css';

const MainHeader = ({text}) => {
    return(
        <div>
            <h1 className={s.nameComponent}>{text}</h1>
            <hr />
        </div>
    )
}

 export default MainHeader;