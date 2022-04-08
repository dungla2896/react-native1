import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// const data: any = await AsyncStorage.getItem('access_token');
// const token = JSON.parse(data)
// console.log(token.puk);

const getToken = async () => {
    try {
        const data: any = await AsyncStorage.getItem('access_token');
        const token = JSON.parse(data);
        return token;
    }
    catch { return null }
}
// Api Oringin:     https://api.ltservices2.ovh/v4/geonames/origins
// Api Country :    https://api.ltservices2.ovh/v4/atlas/countries
// Api Region :     https://api.ltservices2.ovh/v4/atlas/{{country}}/regions
// Api City :       https://api.ltservices2.ovh/v4/atlas/{{country}}/{{region}}/cities
// Api Home:        https://api.ltservices2.ovh/v4/users/pool

const defaultAxios = axios.create({
    baseURL: 'https://api.ltservices2.ovh/v4',
})
 
// Add a request interceptor
defaultAxios.interceptors.request.use(async function (config: AxiosRequestConfig) {
    const token: any = await getToken();
    if(token) {
        config.headers!['x-asgard-puk'] = `${token.puk}`;
        config.headers!['x-asgard-token'] = `${token.token}`;
    }
    config.headers!['Content-Type'] = 'application/json';
    return config;
    }, function (error) {
        return Promise.reject(error);
    }
);

const uploadAxios = axios.create({
    baseURL: 'https://api.ltservices2.ovh/v4',
});

uploadAxios.interceptors.request.use(async function (config: AxiosRequestConfig) {
    const token: any = await getToken();
    if(token) {
        config.headers!['x-asgard-puk'] = `${token.puk}`;
        config.headers!['x-asgard-token'] = `${token.token}`;
    }
    config.headers!['Content-Type'] = 'multipart/form-data';
    return config;
    }, function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
defaultAxios.interceptors.response.use(function (response: AxiosResponse) {
    return response.data;
    }, function (error) {
        return Promise.reject(error);
    }
);

export { defaultAxios, uploadAxios }
export default defaultAxios;
