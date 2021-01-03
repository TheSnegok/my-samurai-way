import {  profileAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS',
      SET_SEARCH = 'SET_SEARCH';

let initialState = {
    news: {},
    regions: 'us',
    search: ''
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_SEARCH: {
            return {
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS, news })
export const setSearch = (search) => ({ type: SET_SEARCH, search })

export const getNews = (search, region) => async (dispatch) => {
        let response = await profileAPI.getNews(search, region);
        if (response.data.resultCode === 0) {
            dispatch(setNews());
        } else {
            alert('Error ' + response.data.resultCode);
        }
    }
    
export default newsReducer;