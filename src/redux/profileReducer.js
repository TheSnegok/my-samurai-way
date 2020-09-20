import {  profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST', 
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, text: 'Hello!', likescount: 12 },
        { id: 2, text: 'How are you?', likescount: 5 }
        ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {id: 5, text: action.newPostText, likescount: 3};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }

export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                return dispatch(setStatus(status));
            }
        })
    }
    
export default profileReducer;