import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNews, setSearch, getNewsFromSearch } from '../../redux/newsReducer';
const News = React.lazy(() => import('./News'));

const NewsContainer = (props) => {

    useEffect(() => {
        props.getNews();
    },[]);

    return (
        <News setSearch={props.setSearch()} news={props.news} />
    );
}

let mapStateToProps = (state) => ({
    news: state.newsPage.news,
    search: state.newsPage.search
});

export default compose(
    connect(mapStateToProps, { getNews, setSearch, getNewsFromSearch}))(NewsContainer);