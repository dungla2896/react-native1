import axiosClient from "./userApi";
import { Username } from '../models/username';

const userApi = {
    signUp(data: Username){
        const url = '/pool/.json?new_key_signup=true';
        return axiosClient.post(url, data);
    },
}

export default userApi;