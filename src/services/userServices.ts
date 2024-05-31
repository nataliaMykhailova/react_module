import {IAuthDataModel} from "../models/IAuthDataModel";
import {apiService} from "./apiServices";
import {urls} from "../constants/urls";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {IUserRegModel} from "../models/IUserRegModel";

const userServices = {
    authentication:async (authData:IAuthDataModel):Promise<boolean> =>{
        let response;
        try {
            response = await apiService.post<ITokenObtainPair>(urls.authUrl, authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e){
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken:string) => {
        const response = await apiService.post<ITokenObtainPair>(urls.refreshUrl, {refresh:refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
    registration: async (regData:IUserRegModel):Promise<boolean> =>{
        try{
          await apiService.post<IAuthDataModel>(urls.registrationUrl, regData);
            return true;
        } catch (e){
            console.log(e)
            return false;
        }
    }
}
export {
    userServices
}