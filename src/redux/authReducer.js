import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA', 
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
                };
            }
        
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching };
        } 
        default: 
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getAuthMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.me().then(response => {
            dispatch(toggleIsFetching(false));
            if (response.resultCode === 0) {
                let {id,  email, login} = response.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    }
}

export default authReducer;