import React from 'react';
import s from './News.module.css';
import NewBlock from './NewBlock/NewBlock';
import MainHeader from '../common/MainHeader/MainHeader';
// import Searcher from '../common/Searcher/Searcher';

const News = ({news, setSearch}) => {
    return (
        <div>
            <MainHeader text='News' />
            {/* <Searcher setSearch={setSearch} /> */}
            <div className={s.place} ></div>
            {news.map(n => <NewBlock title={n.title} author={n.author} description={n.description} urlToImage={n.urlToImage} key={n.title} />)}
        </div>
    );
}

export default News;