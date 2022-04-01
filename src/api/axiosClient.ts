import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const getToken = () => {
    try {
        const data: any = '';
        const token = JSON.parse(data);
        return token;
    }
    catch { return null }
}

// Api login :      http://apiv2.ltservices.ovh/gate/{{login}}.json (Fai)
// Api signUp:      https://apiv2.ltservices2.ovh/pool/.json?new_key_signup=true

// Api Oringin:     https://api.ltservices2.ovh/v4/geonames/origins
// Api Country :    https://api.ltservices2.ovh/v4/atlas/countries
// Api Region :     https://api.ltservices2.ovh/v4/atlas/{{country}}/regions
// Api City :       https://api.ltservices2.ovh/v4/atlas/{{country}}/{{region}}/cities
// Api Home:        https://api.ltservices2.ovh/v4/users/pool

const defaultAxios = axios.create({
    baseURL: 'https://api.ltservices2.ovh/v4',
})
 
// Add a request interceptor
defaultAxios.interceptors.request.use(function (config: AxiosRequestConfig) {
    const token = getToken();
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

uploadAxios.interceptors.request.use(function (config: AxiosRequestConfig) {
    const token = getToken();
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
