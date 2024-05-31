import axios from "axios";
import {baseUrl} from "../constants/urls";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retrieveLocalStorageData} from "../helpers/retrieveLocalStorageData";

let apiService = axios.create({
    baseURL: baseUrl,
    headers: {}
});

apiService.interceptors.request.use((request)=>{
    if(localStorage.getItem('tokenPair') && request.url !=='/auth/refresh' && request.url !== '/users')
        request.headers.set('Authorization', 'Bearer ' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access);


    return request
})
export {
    apiService
}