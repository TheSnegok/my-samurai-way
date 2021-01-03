import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA',
      GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
                };
            }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.captchaUrl
                };
            }
        default: 
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: {id, email, login, isAuth} })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: {captchaUrl} })

export const getAuthMe = () => async (dispatch) => {
        let response = await authAPI.me();

         if (response.resultCode === 0) {
            let {id,  email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
            
        if (response.resultCode === 0) {
            dispatch(getAuthMe());
        } else if(response.resultCode === 10) {
            dispatch(getCaptchaUrl())
            alert('Please write captcha!');
        } else {
            alert('Inccorect email or password!')
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
        const response = await authAPI.security()
        const captchaUrl = response.url;

        dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
        let response = await authAPI.logout();
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer;