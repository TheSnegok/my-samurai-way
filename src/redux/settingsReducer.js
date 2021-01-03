import { newsAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS',
      SET_COUNTRY = 'SET_COUNTRY',
      SET_SEARCH = 'SET_SEARCH';

let initialState = {
    langueges: 'en',
    themes: 'light'
};

const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: action.news
            };
        }
        case SET_COUNTRY: {
            return {
                ...state,
                country: action.country
            };
        }
        case SET_SEARCH: {
            return {
                ...state,
                search: action.search
            }
        }
        default: 
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS, news })
export const setCountry = (country) => ({ type: SET_COUNTRY, country})
export const setSearch = (search) => ({ type: SET_SEARCH, search })

export const getNews = (country = 'us') => async (dispatch) => {
        let response = await newsAPI.getNewsFromCountry(country);
        if (response.status === 'ok') {
            dispatch(setNews(response.articles));
        }
    }

export const getNewsFromSearch = (search) => async (dispatch) => {
        let response = await newsAPI.getNewsFromSearch(search);
        if (response.status === 'ok') {
            dispatch(setNews(response.articles));
        }
    }
    
export default settingsReducer;