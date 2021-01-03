import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b82cdd61-09a9-4fe6-b106-6fb6eda4e4b5"
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
    updateContacts(userId, lookingForAJob, lookingForAJobDescription, fullname, aboutMe, contacts) {
        return instance.put(`profile`, {userId, lookingForAJob, lookingForAJobDescription, fullname, aboutMe, contacts});
    }
}

export const authAPI = {
    me() {
        return(
            instance.get(`auth/me`).then(response => { 
                return response.data;
            })
    )},
    login(email, password, rememberMe = false, captcha) {
        return(
            instance.post(`auth/login`,{email, password, rememberMe, captcha}).then(response => { 
                return response.data;
            })
    )},
    logout() {
        return(
            instance.delete(`auth/login`).then(response => { 
                return response.data;
            })
    )},
    security() {
        return(
            instance.get(`/security/get-captcha-url`).then(response => {
                return response.data;
            })
        )
    }
}

export const newsAPI = {
    getNewsFromCountry(country) {
        return(
            Axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=26f45c78fc34438fa9ad786859db0b07`).then(response => {
                return response.data;
            })
        )
    },
    getNewsFromSearch(search) {
        return(
            Axios.get(`http://newsapi.org/v2/top-headlines?q=${search}&apiKey=26f45c78fc34438fa9ad786859db0b07`).then(response => {
                return response.data;
            })
        )
    }
}