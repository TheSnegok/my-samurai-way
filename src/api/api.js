import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "472b5294-5c7e-44f8-9320-e639c46882de"
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
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    },
    savePhoto(file) {
        var formData = new FormData();
        formData.append('profile-photo', file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
    },
    setContacts(contacts) {
        return instance.put(`profile`, { contacts });
    }
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
