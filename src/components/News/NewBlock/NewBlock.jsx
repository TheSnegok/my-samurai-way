import React from 'react';
import s from './NewBlock.module.css';

const NewBlock = ({title, author, description, urlToImage}) => {
    return (
        <div className={s.block}>
            <div className={s.flex}>
                <div className={s.title}>
                    {title}
                </div>
                <div className={s.author}>
                    {author}
                </div>
            </div>
            {urlToImage !== null
            ?   <div className={s.img}>
                    <img src={urlToImage} className={s.urlToImage} alt="Title"/>
                </div>
            : null}
            <div className={s.description}>
                {description}
            </div>
        </div>
    )
}

export default NewBlock;