import React from 'react';
import s from './News.module.css';
import NewBlock from './NewBlock/NewBlock';
import Search from './Search/Search';
import MainHeader from '../common/MainHeader/MainHeader';

const News = () => {
    return (
        <div>
            <MainHeader text='News' />
            <Search />
            <NewBlock />
        </div>
    );
}

export default News;