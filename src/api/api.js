import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"3ea4ae84-0d91-4770-87a7-66487105c731"
    }
})
export const usersAPI = {
    getUsers (currentPage,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    follow (id=2) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow (id=2){
        return instance.delete(`follow/${id}`)
            .then(response=>response.data)
    },
    getProfile (userId){
        return profileAPI.getProfile(userId)
    }
    }


export const profileAPI = {
    getProfile (userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatusAPI(status){
        return instance.put(`profile/status`, {status})
    },
}

export const authAPI={
    getMe (){
        return instance.get(`auth/me`)
    }

}

