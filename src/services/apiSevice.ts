import axios from "axios";
import {baseUrl} from "../constants/Urls";
import {retrieveLocalStorageData} from "../helpers/retriveLocalStorageData";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

const apiService = axios.create({
    baseURL: baseUrl,
    headers:{}
});
apiService.interceptors.request.use((request) => {
    if (localStorage.getItem('tokenPair') && request.url !=='/auth/refresh' && request.url !== '/auth' && request.url !== '/users') {
        const tokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + tokenObtainPair.access);
    }
    return request;
})








export {
    apiService
}