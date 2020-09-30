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

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: {id, email, login, isAuth} })
export const getAuthMe = () => async (dispatch) => {
        let response = await authAPI.me();

         if (response.resultCode === 0) {
            let {id,  email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email, password, rememberMe) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
            
        if (response.resultCode === 0) {
                dispatch(getAuthMe());
            } else {
                alert('Incorrect email or password!');
            }
}

export const logout = () =>async (dispatch) => {
        let response = await authAPI.logout();
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer;