import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
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
        default: 
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} })
export const getAuthMe = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id,  email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthMe());
            } else {

            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}

export default authReducer;