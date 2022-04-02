import axiosClient from './axiosClient';
import { ListCountries } from '../models';

const countryApi = {
    getOrigin() {
        const url = '/geonames/origins';
        return axiosClient.get(url);
    },
    getCoutries(): Promise<ListCountries>{
        const url = '/atlas/countries';
        return axiosClient.get(url);
    },
    getRegions(id: string): Promise<ListCountries>{
        const url = `/atlas/${id}/regions`;
        return axiosClient.get(url);
    },
    getCity(idCountry: string, idRegion: string): Promise<ListCountries>{
        const url = `/atlas/${idCountry}/${idRegion}/cities`;
        return axiosClient.get(url);
    },
    getUser() {
        const url = '/users/pool';
        return axiosClient.get(url);
    }
}

export default countryApi;