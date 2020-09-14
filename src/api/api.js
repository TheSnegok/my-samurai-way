import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "767ab580-73b4-470d-8abc-bf1aaf28cb0c"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return(
        instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { 
            return response.data;
        })
    )},
    getUnfollow(userId) {
        return(
            instance.delete(`follow/${userId}`).then(response => { 
                return response.data;
            })
    )},
    getFollow(userId) {
        return(
            instance.post(`follow/${userId}`).then(response => { 
                return response.data;
            })
        )},
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => {
                return response.data;
        })
    )},
    getStatus(userId) {
        return(
            instance.get(`profile/status/${userId}`).then(response => {
                return response;
        })
    )},
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status}).then(response => {
                return response.data;
        })
    )}   
}

export const authAPI = {
    me() {
        return(
            instance.get(`auth/me`).then(response => { 
                return response.data;
            })
    )},
    login(email, password, rememberMe = false) {
        return(
            instance.post(`auth/login`,{email, password, rememberMe}).then(response => { 
                return response.data;
            })
    )},
    logout() {
        return(
            instance.delete(`auth/login`).then(response => { 
                return response.data;
            })
    )}
}
