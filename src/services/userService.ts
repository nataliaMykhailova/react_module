import {IAuthDataModel} from "../models/IAuthDataModel";
import {apiService} from "./apiSevice";
import {urls} from "../constants/Urls";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retrieveLocalStorageData} from "../helpers/retriveLocalStorageData";
import {AxiosError} from "axios";
import {IUserRegModel} from "../models/IUserRegModel";

const userService = {
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        try {
            const response = await apiService.post<ITokenObtainPair>(urls.authUrl, authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
            return !!(response?.data?.access && response?.data?.refresh);
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError.response?.status === 401) {
                console.error('Unauthorized: Incorrect username or password')
            }
            return false;
        }
    },
    refresh: async () => {
        const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
        const response = await apiService.post<ITokenObtainPair>(urls.refreshUrl, {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
    registration: async (regData:IUserRegModel):Promise<boolean> =>{
        try{
            await apiService.post<IUserRegModel>(urls.registrationUrl, regData);
            return true;
        } catch (e){
            console.log(e)
            return false;
        }
    }
}

export {
    userService
}