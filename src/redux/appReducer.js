import { getAuthMe } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                    initialized: true
                };
            }
        default: 
            return state;
    }
}

export const initializedSucces = () => ({ type: INITIALIZED_SUCCESS });
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthMe());
    Promise.all([promise])
    .then(() => {
        dispatch(initializedSucces());
    });
}

export default appReducer;